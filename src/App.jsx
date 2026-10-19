import { useEffect, useState } from "react";
import {
  profile, nav, hero, stats, about, projectsSection, projects,
  experienceSection, experience, skillsSection, skills,
  educationSection, education, contact,
} from "./data";

const asset = (p) => `${import.meta.env.BASE_URL}${p}`;
const fullName = [profile.name.before, profile.name.highlight, profile.name.after]
  .filter(Boolean)
  .join(" ");

/* ------------------------------ hooks ------------------------------ */
function useTyping(words) {
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduce ? words[0] : "");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (reduce) return;
    const word = words[i % words.length];
    let delay = del ? 35 : 75;
    let next;
    if (!del && text === word) {
      delay = 1600;
      next = () => setDel(true);
    } else if (del && text === "") {
      delay = 300;
      next = () => {
        setDel(false);
        setI((n) => n + 1);
      };
    } else {
      next = () => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }
    const id = setTimeout(next, delay);
    return () => clearTimeout(id);
  }, [text, del, i, words, reduce]);

  return text;
}

/* --------------------------- small pieces --------------------------- */
function Typed({ words }) {
  const text = useTyping(words);
  return (
    <p className="typed" aria-label={words.join(", ")}>
      <span className="accent">&gt;</span> {text}
      <span className="caret" aria-hidden="true" />
    </p>
  );
}

/* Title bar gaya Windows: ikon app + judul, tombol minimize / maximize / close */
function WindowBar({ title }) {
  return (
    <div className="window-bar">
      <span className="win-title">
        <svg className="app-ico" width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
          <rect className="a" x="1" y="1" width="14" height="14" rx="3" />
          <rect className="b" x="4" y="4" width="8" height="2" rx="1" />
          <rect className="b" x="4" y="8" width="5" height="2" rx="1" />
        </svg>
        {title}
      </span>
      <span className="win-ctrl" aria-hidden="true">
        <b>─</b><b>▢</b><b className="x">✕</b>
      </span>
    </div>
  );
}

function SectionHead({ num, eyebrow, title, t }) {
  return (
    <div className="sec-head reveal">
      <p className="eyebrow">// {num}. {t(eyebrow)}</p>
      <h2>{t(title)}</h2>
    </div>
  );
}

/* ------------------------------ sections ------------------------------ */
function Navbar({ t, lang, setLang, scrolled, open, setOpen }) {
  return (
    <nav className={`nav ${scrolled || open ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">{profile.logo}<span>.exe</span></a>
        <ul className={`menu ${open ? "open" : ""}`} id="menu">
          {nav.map((n, i) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)}>
                <em>0{i + 1}.</em>{t(n.label)}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <div className="lang" role="group" aria-label="Language">
            {["id", "en"].map((l) => (
              <button key={l} type="button" className={lang === l ? "active" : ""} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            className="burger"
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero({ t }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <header className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <span className="status"><i />{t(hero.status)}</span>
            <p className="prompt">{profile.promptPath}<b>&gt;</b> whoami</p>
            <h1>
              {profile.name.before} <span className="grad">{profile.name.highlight}</span>
              {profile.name.after ? ` ${profile.name.after}` : ""}
            </h1>
            <Typed words={hero.roles} />
            <p className="lead">{t(hero.lead)}</p>
            <div className="actions">
              <a href="#projects" className="btn btn-primary">{t(hero.ctaProjects)} →</a>
              <a href="#contact" className="btn btn-ghost">{t(hero.ctaContact)}</a>
              {profile.cv && (
                <a href={asset(profile.cv)} download className="btn btn-ghost">↓ {t(hero.ctaCv)}</a>
              )}
            </div>
            <div className="socials">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              {profile.linkedin && (
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
              )}
              {profile.instagram && (
                <a href={profile.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a>
              )}
            </div>
          </div>

          <div className="photo-wrap reveal">
            <div className="window">
              <WindowBar title={profile.photoTitle} />
              <div className="photo">
                {imgOk ? (
                  <img src={asset(profile.photo)} alt={`Foto ${fullName}`} onError={() => setImgOk(false)} />
                ) : (
                  <span className="initials">{profile.initials}</span>
                )}
              </div>
            </div>
            <div className="float f1"><b>{hero.floatValue}</b>{t(hero.floatLabel)}</div>
            <div className="float f2 mono">{hero.floatTop}</div>
          </div>
        </div>

        <div className="stats reveal">
          {stats.map((s) => (
            <div className="stat" key={t(s.label)}>
              <b>{t(s.value)}</b>
              <span>{t(s.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

/* Kartu profil dalam bentuk class VB.NET, tampilan editor Visual Studio */
function CodeCard({ t }) {
  const c = about.code;
  const K = (v) => <span className="tk-k">{v}</span>;
  const T = (v) => <span className="tk-t">{v}</span>;
  const S = (v) => <span className="tk-s">"{v}"</span>;

  const line = (f) => {
    if (f.bool !== undefined) {
      return <>{K("Public")} {f.key} {K("As")} {T("Boolean")} = {K(f.bool ? "True" : "False")}</>;
    }
    if (f.list) {
      return (
        <>
          {K("Public")} {f.key}() {K("As")} {T("String")} = {"{"}
          {f.list.map((x, i) => (
            <span key={x}>{S(x)}{i < f.list.length - 1 ? ", " : ""}</span>
          ))}
          {"}"}
        </>
      );
    }
    return <>{K("Public")} {f.key} {K("As")} {T("String")} = {S(t(f.value))}</>;
  };

  return (
    <div className="window reveal">
      <WindowBar title={`${c.className}.vb — Visual Studio`} />
      <div className="menu-strip" aria-hidden="true">
        {["File", "Edit", "View", "Project", "Build", "Debug"].map((m) => <span key={m}>{m}</span>)}
      </div>
      <pre className="code">
        <div><span className="tk-c">{t(c.comment)}</span></div>
        <div>{K("Public Class")} {T(c.className)}</div>
        {c.fields.map((f) => <div key={f.key}>{"    "}{line(f)}</div>)}
        <div>{K("End Class")}</div>
      </pre>
    </div>
  );
}

function About({ t }) {
  return (
    <section id="about">
      <div className="container">
        <SectionHead num="01" eyebrow={about.eyebrow} title={about.title} t={t} />
        <div className="about-grid">
          <div className="about-text reveal">
            {about.paragraphs.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
          <CodeCard t={t} />
        </div>
      </div>
    </section>
  );
}

function Projects({ t }) {
  return (
    <section id="projects" className="alt">
      <div className="container">
        <SectionHead num="02" eyebrow={projectsSection.eyebrow} title={projectsSection.title} t={t} />
        <div className="proj-grid">
          {projects.map((p, i) => (
            <article
              key={i}
              className={`card proj reveal ${p.featured ? "featured" : ""} ${p.exe ? "app" : ""}`}
            >
              {p.exe && <WindowBar title={p.exe} />}
              <div className="proj-top">
                <span>{p.category}</span>
                {p.featured && <span className="star">★ {t(projectsSection.featured)}</span>}
              </div>
              <h3>{t(p.title)}</h3>
              <p>{t(p.desc)}</p>
              <div className="tags">
                {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience({ t }) {
  return (
    <section id="experience">
      <div className="container">
        <SectionHead num="03" eyebrow={experienceSection.eyebrow} title={experienceSection.title} t={t} />
        {experience.map((job, idx) => (
          <article className="job" key={idx}>
            <div className="job-meta reveal">
              <p className="period">{t(job.period)}</p>
              <h3>{t(job.role)}</h3>
              <p>{job.company}</p>
            </div>

            {job.groups ? (
              <div className="groups">
                {job.groups.map((g, gi) => (
                  <div className="card group reveal" key={gi}>
                    <h4>{t(g.title)}</h4>
                    <ul className="list">
                      {g.items.map((it, i) => <li key={i}>{t(it)}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ) : job.items ? (
              <div className="card reveal">
                <ul className="list">
                  {job.items.map((it, i) => <li key={i}>{t(it)}</li>)}
                </ul>
              </div>
            ) : (
              <p className="job-summary reveal">{t(job.summary)}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills({ t }) {
  return (
    <section id="skills" className="alt">
      <div className="container">
        <SectionHead num="04" eyebrow={skillsSection.eyebrow} title={skillsSection.title} t={t} />
        <div className="skills-grid">
          {skills.map((g) => (
            <div className="card reveal" key={g.title}>
              <h3>{g.title}</h3>
              <div className="tags">
                {g.items.map((s) => <span className="tag" key={t(s)}>{t(s)}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education({ t }) {
  return (
    <section id="education">
      <div className="container">
        <SectionHead num="05" eyebrow={educationSection.eyebrow} title={educationSection.title} t={t} />
        <div className="edu-grid">
          <div className="card reveal">
            <h3>{t(education.degree)}</h3>
            <p className="muted">{t(education.school)}</p>
            <p className="gpa"><span className="grad">{t(education.gpa)}</span> <small>{t(education.gpaOf)}</small></p>
            {education.activities?.length > 0 && (
              <>
                <p className="label">{t(education.activitiesLabel)}</p>
                <ul className="list">
                  {education.activities.map((a, i) => <li key={i}>{t(a)}</li>)}
                </ul>
              </>
            )}
          </div>

          <div className="edu-side">
            {(education.side || []).map((s, i) => (
              <div className="card reveal" key={i}>
                <p className="label first">{t(s.label)}</p>
                {s.title && <h3 className="side-title">{t(s.title)}</h3>}
                {s.sub && <p className="muted side-sub">{t(s.sub)}</p>}
                {s.text && <p className="pub">{t(s.text)}</p>}
                {s.items && (
                  <ul className="list">
                    {s.items.map((it, j) => <li key={j}>{t(it)}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Kontak dalam bentuk jendela Windows PowerShell */
function Contact({ t }) {
  const lines = [
    ["-Email", profile.email && `mailto:${profile.email}`, profile.email],
    ["-LinkedIn", profile.linkedin, profile.linkedinLabel],
    ["-WhatsApp", profile.whatsapp, profile.whatsappLabel],
    ["-Instagram", profile.instagram, profile.instagramLabel],
  ].filter(([, href]) => href);

  return (
    <section id="contact" className="contact alt">
      <div className="container">
        <SectionHead num="06" eyebrow={contact.eyebrow} title={contact.title} t={t} />
        <p className="contact-sub reveal">{t(contact.sub)}</p>
        <div className="window terminal reveal">
          <WindowBar title="Windows PowerShell" />
          <div className="term-body ps">
            {lines.map(([flag, href, label]) => (
              <div key={flag}>
                <p className="cmd"><b>{profile.promptPath}&gt;</b> Get-Contact {flag}</p>
                <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {label}
                </a>
              </div>
            ))}
            <p className="cmd"><b>{profile.promptPath}&gt;</b> <span className="caret" aria-hidden="true" /></p>
          </div>
        </div>
        <div className="actions center reveal">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">✉ {t(contact.ctaEmail)}</a>
          {profile.cv && (
            <a href={asset(profile.cv)} download className="btn btn-ghost">↓ {t(hero.ctaCv)}</a>
          )}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- app -------------------------------- */
export default function App() {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "id");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // teks bisa string biasa atau { id, en }
  const t = (v) => (v && typeof v === "object" && "id" in v ? v[lang] : v);

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // animasi muncul saat discroll
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar t={t} lang={lang} setLang={setLang} scrolled={scrolled} open={open} setOpen={setOpen} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Projects t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Education t={t} />
        <Contact t={t} />
      </main>
      <footer>
        © {new Date().getFullYear()} {fullName} · {t(contact.builtWith)}
      </footer>
    </>
  );
}