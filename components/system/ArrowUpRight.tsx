/** Inline arrow: the ↗ character renders as a colour emoji on iOS/Android, an SVG looks the same everywhere. */
export function ArrowUpRight() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="1em" height="1em" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ display: "inline-block", verticalAlign: "-0.1em", marginLeft: ".2em" }}>
      <path d="M4 12L12 4M5.5 4H12v6.5" />
    </svg>
  );
}
