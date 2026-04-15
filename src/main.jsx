import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  ChevronDown,
  Download,
  ExternalLink,
  FileText,
  Linkedin,
  Mail,
  Menu,
  Quote,
  Sparkles,
  X
} from 'lucide-react';
import { profile } from './data/profile';
import './styles.css';

const navItems = [
  ['Work', 'work'],
  ['Endorsement', 'endorsement'],
  ['Profile', 'profile'],
  ['Experience', 'experience'],
  ['Resume', 'resume'],
  ['Contact', 'contact']
];

function App() {
  const [activePdf, setActivePdf] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const mailto = useMemo(() => {
    const subject = encodeURIComponent('Consulting recruiting conversation');
    const body = encodeURIComponent(
      `Hi Linh,\n\nI saw your consulting candidate portfolio and would like to connect.`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }, []);

  return (
    <>
      <Navigation open={mobileNavOpen} setOpen={setMobileNavOpen} />
      <main>
        <Hero mailto={mailto} />
        <FeaturedProjects onPreview={setActivePdf} />
        <Recommendation onPreview={setActivePdf} />
        <About />
        <Experience />
        <Resume onPreview={setActivePdf} />
        <Skills />
        <Contact mailto={mailto} />
      </main>
      <Footer />
      {activePdf && <PdfModal pdf={activePdf} onClose={() => setActivePdf(null)} />}
    </>
  );
}

function Navigation({ open, setOpen }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold text-ink">
          <span className="grid h-9 w-9 place-items-center border border-ink bg-ink text-paper">LN</span>
          <span>Linh Nguyen</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map(([label, id]) => (
            <a key={id} className="nav-link" href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center border border-line text-ink md:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-line bg-paper px-5 py-3 md:hidden">
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className="block py-3 text-sm font-semibold text-graphite"
              href={`#${id}`}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

function Hero({ mailto }) {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line bg-paper">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover object-center opacity-[0.18]"
          src={profile.headshot}
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-paper/82" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="section-kicker">Consulting candidate portfolio</p>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl font-semibold leading-tight text-ink md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-xl font-semibold text-graphite md:text-2xl">{profile.headline}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-graphite md:text-lg">{profile.positioning}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="btn-primary" href="#resume">
              View resume
            </a>
            <a className="btn-secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <ArrowUpRight size={16} />
            </a>
            <a className="btn-secondary" href={mailto}>
              Contact <Mail size={16} />
            </a>
          </div>
        </div>
        <aside className="self-end border-l-4 border-oxblood bg-white/88 p-6 shadow-lift">
          <div className="flex items-start gap-4">
            <img
              src={profile.headshot}
              alt={`${profile.name} headshot`}
              className="h-24 w-24 shrink-0 object-cover"
            />
            <div>
              <p className="text-sm font-semibold uppercase text-oxblood">Fast read</p>
              <p className="mt-2 text-sm leading-6 text-graphite">
                Recruiter-friendly evidence of structured thinking, analytical work, and professional validation.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {profile.metrics.map((metric) => (
              <div key={metric.label} className="border border-line bg-paper px-4 py-3">
                <p className="font-serif text-3xl font-semibold text-ink">{metric.value}</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-5 text-graphite">{metric.label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function FeaturedProjects({ onPreview }) {
  return (
    <section id="work" className="section bg-white">
      <SectionIntro
        kicker="Featured work"
        title="Proof points first, before the standard resume read."
        body="These materials are placed near the top so recruiters can quickly see how Linh structures problems, communicates recommendations, and turns analysis into a polished deliverable."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {profile.projects.map((project) => (
          <ProjectCard key={project.title} project={project} onPreview={onPreview} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onPreview }) {
  return (
    <article className="group grid overflow-hidden border border-line bg-paper transition duration-200 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[0.95fr_1.05fr]">
      <div className="pdf-preview bg-white">
        <object className="h-full w-full" data={`${project.file}#page=1&toolbar=0&navpanes=0`} type="application/pdf">
          <div className="flex h-full flex-col justify-between p-6 text-left">
            <FileText className="text-oxblood" size={30} />
            <div>
              <p className="text-xs font-semibold uppercase text-graphite">PDF preview</p>
              <p className="mt-2 text-lg font-semibold text-ink">{project.title}</p>
            </div>
          </div>
        </object>
        <button
          className="absolute inset-0 z-10 bg-transparent"
          type="button"
          onClick={() => onPreview({ title: project.title, file: project.file })}
          aria-label={`Preview ${project.title}`}
        />
      </div>
      <div className="flex flex-col justify-between p-6">
        <div>
          <p className={`eyebrow accent-${project.accent}`}>{project.eyebrow}</p>
          <h3 className="mt-3 text-2xl font-semibold leading-tight text-ink">{project.title}</h3>
          <p className="mt-4 text-sm leading-7 text-graphite">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.skills.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          <button className="text-button" type="button" onClick={() => onPreview({ title: project.title, file: project.file })}>
            Preview deck <ExternalLink size={15} />
          </button>
          <a className="text-button" href={project.file} target="_blank" rel="noreferrer">
            Open PDF <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}

function Recommendation({ onPreview }) {
  const rec = profile.recommendation;
  return (
    <section id="endorsement" className="section border-y border-line bg-paper">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="section-kicker">Third-party validation</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">Recommendation-led credibility.</h2>
          <p className="mt-5 text-base leading-8 text-graphite">{rec.summary}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="btn-primary" type="button" onClick={() => onPreview({ title: rec.title, file: rec.file })}>
              View letter
            </button>
            <a className="btn-secondary" href={rec.file} download>
              Download <Download size={16} />
            </a>
          </div>
        </div>
        <div className="border border-line bg-white p-7 shadow-lift">
          <Quote className="text-oxblood" size={34} />
          <p className="mt-5 font-serif text-2xl leading-10 text-ink">{rec.excerpt}</p>
          <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
            <div>
              <p className="text-sm font-semibold text-ink">{rec.title}</p>
              <p className="mt-1 text-xs font-semibold uppercase text-graphite">Available for full review</p>
            </div>
            <FileText className="text-fern" size={28} />
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="profile" className="section bg-white">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Profile</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">Structured thinking with client-ready communication.</h2>
        </div>
        <div>
          <p className="text-lg leading-9 text-graphite">{profile.about}</p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {profile.proofPoints.map((point) => (
              <div key={point} className="border border-line bg-paper p-5">
                <Sparkles className="text-oxblood" size={22} />
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="experience" className="section border-y border-line bg-paper">
      <SectionIntro
        kicker="Experience"
        title="Impact framed through consulting-relevant behaviors."
        body="Each item emphasizes the signals recruiters tend to look for: problem solving, ownership, communication, leadership, and judgment."
      />
      <div className="mt-10 space-y-4">
        {profile.experience.map((item, index) => {
          const open = openIndex === index;
          return (
            <article key={item.company} className="border border-line bg-white">
              <button
                type="button"
                className="flex w-full items-start justify-between gap-5 p-6 text-left"
                onClick={() => setOpenIndex(open ? -1 : index)}
              >
                <span>
                  <span className="block text-xs font-semibold uppercase text-oxblood">{item.period}</span>
                  <span className="mt-2 block text-2xl font-semibold text-ink">{item.company}</span>
                  <span className="mt-1 block text-sm font-semibold text-graphite">{item.role}</span>
                </span>
                <ChevronDown className={`mt-2 shrink-0 text-graphite transition ${open ? 'rotate-180' : ''}`} size={22} />
              </button>
              {open && (
                <div className="border-t border-line px-6 pb-6 pt-2">
                  <ul className="space-y-3">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 text-sm leading-7 text-graphite">
                        <span className="mt-3 h-1.5 w-1.5 shrink-0 bg-oxblood" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Resume({ onPreview }) {
  return (
    <section id="resume" className="section bg-white">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="section-kicker">Resume</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">A recruiter-friendly resume hub.</h2>
          <p className="mt-5 text-base leading-8 text-graphite">
            Add the final resume PDF when ready. The section is already designed for embedded viewing, download, and a quick web-native read.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {profile.resume.available ? (
              <>
                <button
                  className="btn-primary"
                  type="button"
                  onClick={() => onPreview({ title: 'Resume', file: profile.resume.path })}
                >
                  Preview resume
                </button>
                <a className="btn-secondary" href={profile.resume.path} download>
                  Download <Download size={16} />
                </a>
              </>
            ) : (
              <a className="btn-primary" href="#contact">
                Request resume
              </a>
            )}
          </div>
        </div>
        <div className="min-h-[440px] border border-line bg-paper p-6">
          {profile.resume.available ? (
            <object className="h-[540px] w-full bg-white" data={profile.resume.path} type="application/pdf">
              <p className="p-5 text-sm text-graphite">Resume preview unavailable in this browser.</p>
            </object>
          ) : (
            <div className="grid h-full min-h-[420px] place-items-center border border-dashed border-line bg-white p-8 text-center">
              <div className="max-w-md">
                <FileText className="mx-auto text-oxblood" size={42} />
                <h3 className="mt-5 text-2xl font-semibold text-ink">Resume PDF placeholder</h3>
                <p className="mt-3 text-sm leading-7 text-graphite">{profile.resume.note}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="section border-y border-line bg-paper">
      <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="section-kicker">Skills</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">Consulting-ready capabilities.</h2>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profile.skills.map((skill, index) => (
            <div key={skill} className="flex items-center gap-3 border border-line bg-white px-4 py-4">
              {index % 3 === 0 && <BarChart3 className="text-oxblood" size={19} />}
              {index % 3 === 1 && <BriefcaseBusiness className="text-fern" size={19} />}
              {index % 3 === 2 && <FileText className="text-brass" size={19} />}
              <span className="text-sm font-semibold text-ink">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact({ mailto }) {
  return (
    <section id="contact" className="section bg-ink text-paper">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase text-white/65">Contact</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight">Open to consulting conversations.</h2>
          <p className="mt-5 text-base leading-8 text-white/75">
            Best for recruiting outreach, coffee chats, project discussion, and interview process coordination.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <a className="contact-link" href={mailto}>
            <Mail size={19} /> {profile.email}
          </a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={19} /> LinkedIn profile
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line bg-paper px-5 py-8 text-center text-xs font-semibold uppercase text-graphite">
      {profile.name} - Consulting Candidate Portfolio
    </footer>
  );
}

function PdfModal({ pdf, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-ink/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={pdf.title}>
      <div className="mx-auto flex h-full max-w-6xl flex-col bg-paper shadow-lift">
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <div>
            <p className="text-xs font-semibold uppercase text-oxblood">PDF viewer</p>
            <h2 className="text-lg font-semibold text-ink">{pdf.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <a className="text-button hidden sm:inline-flex" href={pdf.file} target="_blank" rel="noreferrer">
              Open tab <ArrowUpRight size={15} />
            </a>
            <button className="grid h-10 w-10 place-items-center border border-line text-ink" type="button" onClick={onClose} aria-label="Close PDF viewer">
              <X size={18} />
            </button>
          </div>
        </div>
        <object className="min-h-0 flex-1 bg-white" data={pdf.file} type="application/pdf">
          <div className="grid h-full place-items-center p-8 text-center">
            <div>
              <p className="text-sm text-graphite">This browser cannot embed the PDF preview.</p>
              <a className="btn-primary mt-5 inline-flex" href={pdf.file} target="_blank" rel="noreferrer">
                Open PDF
              </a>
            </div>
          </div>
        </object>
      </div>
    </div>
  );
}

function SectionIntro({ kicker, title, body }) {
  return (
    <div className="max-w-3xl">
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink">{title}</h2>
      <p className="mt-5 text-base leading-8 text-graphite">{body}</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
