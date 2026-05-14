import React, { useEffect, useState } from "react";
import { resume } from "./data/resume.js";

function Section({ title, children, className = "" }) {
  return (
    <section
      className={`scroll-mt-20 border-t border-white/10 pt-5 ${className}`}
      aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
    >
      <h2
        id={`${title.toLowerCase().replace(/\s+/g, "-")}-heading`}
        className="mb-3 text-[11px] font-black uppercase tracking-[0.16em] text-white"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Header() {
  return (
    <header className="mx-auto max-w-4xl pb-4 pt-1 text-center sm:pt-2">
      <h1 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl">
        {resume.name}
      </h1>
      <ul
        className="mt-2 flex flex-wrap items-center justify-center gap-y-1 text-[13px] font-semibold text-zinc-300"
        aria-label="Contact information"
      >
        {resume.contact.map((item, index) => (
          <li key={item.label} className="flex items-center">
            {index > 0 && <span className="mx-2.5 text-zinc-500">|</span>}
            {item.href ? (
              <a
                className="underline-offset-4 transition hover:text-white hover:underline"
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
              >
                {item.label}
              </a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
}

function Summary() {
  return (
    <Section title="Summary" className="border-t-0 pt-0">
      <p className="max-w-3xl text-[15px] font-semibold leading-7 text-zinc-100">
        {resume.summary}
      </p>
    </Section>
  );
}

function Education() {
  return (
    <Section title="Education">
      <div className="grid gap-1.5 text-[15px] sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="font-extrabold text-white">{resume.education.school}</p>
          <p className="font-semibold text-zinc-200">{resume.education.degree}</p>
        </div>
        <p className="font-bold text-zinc-300">{resume.education.date}</p>
      </div>
    </Section>
  );
}

function Certifications() {
  return (
    <Section title="Certifications">
      <ul className="flex flex-wrap text-[14px] font-bold leading-6 text-zinc-100">
        {resume.certifications.map((certification, index) => (
          <li key={certification.name} className="flex items-center">
            {index > 0 && <span className="mx-2 text-zinc-500">|</span>}
            <a
              className="rounded-sm underline-offset-4 transition hover:text-white hover:underline hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f]"
              href={certification.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certification.name}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function BulletList({ items }) {
  return (
    <ul className="mt-2 space-y-1.5 text-[13.5px] font-semibold leading-6 text-zinc-200 sm:text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span className="mt-[0.58rem] h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <Section title="Experience">
      {resume.experience.map((role) => (
        <article key={role.title} className="group">
          <div className="grid gap-1.5 sm:grid-cols-[1fr_auto] sm:items-start">
            <h3 className="text-[15px] font-extrabold text-white transition group-hover:text-zinc-200">
              {role.title}
            </h3>
            <p className="text-sm font-bold text-zinc-300">{role.date}</p>
          </div>
          <BulletList items={role.bullets} />
        </article>
      ))}
    </Section>
  );
}

function ProjectCard({ project }) {
  return (
    <a
      className="group block rounded-md border border-white/10 bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.045] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1f1f1f] sm:p-4"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} - open project link`}
    >
      <article>
        <div className="grid gap-1.5 sm:grid-cols-[1fr_auto] sm:items-start">
          <h3 className="text-[15px] font-extrabold leading-5 text-white transition group-hover:text-zinc-100">
            {project.title}
          </h3>
          <p className="whitespace-nowrap text-[13px] font-bold text-zinc-300">
            {project.date}
          </p>
        </div>
        <BulletList items={project.bullets} />
      </article>
    </a>
  );
}

function Projects() {
  return (
    <Section title="Projects">
      <div className="grid gap-3">
        {resume.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section title="Technical Skills">
      <p className="text-[14px] font-bold leading-6 text-zinc-100">
        {resume.skills}
      </p>
    </Section>
  );
}

function Activities() {
  return (
    <Section title="Extra Curricular Activities">
      <BulletList items={resume.activities} />
    </Section>
  );
}

function VisitorCounter() {
  const [status, setStatus] = useState("loading");
  const [views, setViews] = useState(null);
  const apiUrl = import.meta.env.VITE_VISITOR_API_URL;

  useEffect(() => {
    if (!apiUrl || apiUrl.includes("example.execute-api")) {
      setStatus("unavailable");
      return;
    }

    let ignore = false;
    const viewsUrl = `${apiUrl.replace(/\/$/, "")}/views`;

    setStatus("loading");

    fetch(viewsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Visitor API request failed");
        }

        return response.json();
      })
      .then((data) => {
        if (!ignore && typeof data.views === "number") {
          setViews(data.views);
          setStatus("success");
        } else if (!ignore) {
          setStatus("unavailable");
        }
      })
      .catch(() => {
        if (!ignore) {
          setStatus("unavailable");
        }
      });

    return () => {
      ignore = true;
    };
  }, [apiUrl]);

  const label =
    status === "success" ? `Visitors: ${views}` : "Visitors: unavailable";

  return (
    <div
      className="inline-flex rounded border border-white/10 bg-black/25 px-2.5 py-1.5 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500"
      aria-live="polite"
    >
      {status === "loading" ? "Visitors: loading" : label}
    </div>
  );
}

function Footer() {
  return (
    <footer className="mt-6 border-t border-white/10 pt-4 text-center">
      <VisitorCounter />
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0a0a0a] text-zinc-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.11),transparent_58%)]" />
      <div className="relative mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:py-5">
        <div className="mx-auto max-w-5xl rounded-lg border border-white/30 bg-[#1f1f1f]/95 p-5 shadow-glow backdrop-blur sm:p-7 lg:p-9">
          <Header />
          <div className="mx-auto grid max-w-4xl gap-4">
            <Summary />
            <Education />
            <Certifications />
            <Experience />
            <Projects />
            <Skills />
            <Activities />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
