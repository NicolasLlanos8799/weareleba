import { neon } from "@neondatabase/serverless";
import { NextResponse } from "next/server";
import { z } from "zod";

const PRO_SPOTS = 5;

const schema = z.object({
  email: z.string().trim().toLowerCase().email().max(160),
  name: z.string().trim().max(120).optional(),
  business: z.string().trim().max(160).optional(),
  language: z.enum(["es", "en"]).default("es"),
  website: z.string().optional(), // honeypot: real people leave it empty
});

// Best-effort throttle per instance; the unique index is the real guard against duplicates.
const hits = new Map<string, number[]>();
function throttled(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(t => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 5;
}

function sql() {
  const url = process.env.WAITLIST_DATABASE_URL;
  if (!url) throw new Error("WAITLIST_DATABASE_URL is not set");
  return neon(url);
}

export async function GET() {
  try {
    const [{ total }] = await sql()`select count(*)::int as total from waitlist`;
    return NextResponse.json({ spotsLeft: Math.max(0, PRO_SPOTS - total), proSpots: PRO_SPOTS });
  } catch {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (throttled(ip)) return NextResponse.json({ error: "too_many_requests" }, { status: 429 });

  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const { email, name, business, language, website } = parsed.data;
  if (website) return NextResponse.json({ ok: true, position: null, pro: false }); // silently drop bots

  try {
    const db = sql();
    const inserted = await db`
      insert into waitlist (email, name, business, language)
      values (${email}, ${name || null}, ${business || null}, ${language})
      on conflict (lower(email)) do nothing
      returning id`;
    const already = inserted.length === 0;
    const [row] = already
      ? await db`select id from waitlist where lower(email) = ${email}`
      : inserted;
    const [{ position }] = await db`select count(*)::int as position from waitlist where id <= ${row.id}`;
    return NextResponse.json({ ok: true, already, position, pro: position <= PRO_SPOTS });
  } catch {
    return NextResponse.json({ error: "server" }, { status: 500 });
  }
}
