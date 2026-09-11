"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import styles from "./RebelsKiteSchoolCase.module.css";

const content = {
  en: {
    eyebrow: "03 / MANAGEMENT SYSTEM",
    title: <>Rebels Kite<br />School.</>,
    intro: "A custom management system built to bring lessons, instructors, students and payments into one operational workspace.",
    label: "THE CHALLENGE",
    challenge: "Running a kite school means coordinating people, schedules and payments around conditions that can change every day. We designed a system that gave the team one clear place to manage the operation.",
    system: "THE SYSTEM",
    systemCopy: "The product combined an interactive calendar with role-based dashboards and operational controls, turning day-to-day coordination into a structured workflow.",
    modules: [
      ["01", "Interactive calendar", "Plan classes, assign instructors and keep the daily schedule visible at a glance."],
      ["02", "Students & instructors", "Centralize student records, instructor availability and class status."],
      ["03", "Payments & billing", "Track payment states and keep financial information connected to each booking."],
      ["04", "Role-based access", "Give each user the information and controls relevant to their role."],
    ],
    result: "FROM SCHEDULE TO OPERATIONS.",
    resultCopy: "A focused digital workspace designed around the real workflow of a kite school — reducing scattered information and making the operation easier to coordinate.",
    note: "This project was developed and deployed for a real client, providing a working foundation for the school's day-to-day management.",
  },
  es: {
    eyebrow: "03 / SISTEMA DE GESTIÓN",
    title: <>Rebels Kite<br />School.</>,
    intro: "Un sistema de gestión a medida creado para centralizar clases, profesores, alumnos y pagos en un único espacio operativo.",
    label: "EL DESAFÍO",
    challenge: "Gestionar una escuela de kite implica coordinar personas, horarios y pagos alrededor de condiciones que pueden cambiar cada día. Diseñamos un sistema que le diera al equipo un único lugar para gestionar la operación.",
    system: "EL SISTEMA",
    systemCopy: "El producto combinaba un calendario interactivo con paneles diferenciados por rol y controles operativos, convirtiendo la coordinación diaria en un flujo estructurado.",
    modules: [
      ["01", "Calendario interactivo", "Planificar clases, asignar profesores y visualizar la agenda diaria de un vistazo."],
      ["02", "Alumnos y profesores", "Centralizar registros de alumnos, disponibilidad de profesores y estado de las clases."],
      ["03", "Pagos y facturación", "Controlar estados de pago y mantener la información financiera vinculada a cada reserva."],
      ["04", "Accesos por rol", "Dar a cada usuario la información y los controles relevantes para su función."],
    ],
    result: "DEL CALENDARIO A LA OPERACIÓN.",
    resultCopy: "Un espacio de trabajo digital diseñado alrededor del funcionamiento real de una escuela de kite, reduciendo información dispersa y haciendo más sencilla la coordinación diaria.",
    note: "Este proyecto fue desarrollado e implementado para un cliente real, creando una base funcional para la gestión diaria de la escuela.",
  },
};

export function RebelsKiteSchoolCase() {
  const { language } = useLanguage();
  const copy = content[language];

  return (
    <main className={styles.case}>
      <section className={styles.hero}>
        <div className={styles.heroMeta}>{copy.eyebrow}</div>
        <div className={styles.heroGrid}>
          <div>
            <h1>{copy.title}</h1>
            <p>{copy.intro}</p>
          </div>
          <div className={styles.dashboard} aria-hidden="true">
            <div className={styles.dashTop}><strong>REBELS</strong><span>MANAGEMENT</span><i /><i /><i /></div>
            <div className={styles.dashBody}>
              <aside><b>Dashboard</b><span>Calendar</span><span>Students</span><span>Instructors</span><span>Payments</span></aside>
              <div className={styles.dashMain}>
                <div className={styles.dashHeading}><span>Weekly schedule</span><b>Mon — Sun</b></div>
                <div className={styles.week}>{["MON","TUE","WED","THU","FRI"].map((day) => <div key={day}><small>{day}</small><em /><em /><em /></div>)}</div>
                <div className={styles.dashStats}><div><small>LESSONS</small><b>32</b></div><div><small>STUDENTS</small><b>86</b></div><div><small>PENDING</small><b>07</b></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.textSection}>
        <span>{copy.label}</span>
        <p>{copy.challenge}</p>
      </section>

      <section className={styles.systemSection}>
        <div className={styles.sectionHead}><span>{copy.system}</span><p>{copy.systemCopy}</p></div>
        <div className={styles.modules}>{copy.modules.map(([number, title, text]) => <article key={number}><small>{number}</small><h2>{title}</h2><p>{text}</p></article>)}</div>
      </section>

      <section className={styles.result}>
        <div><span>04 / OUTCOME</span><h2>{copy.result}</h2></div>
        <div><p>{copy.resultCopy}</p><small>{copy.note}</small></div>
      </section>
    </main>
  );
}
