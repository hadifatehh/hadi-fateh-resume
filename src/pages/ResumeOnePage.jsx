import "../styles/resume-min.css";
import { resume } from "../data/resume";
import { buildCertificates } from "../data/certificatesFromFolder";
import PortfolioSection from "../components/PortfolioSection";
import { useMemo, useState } from "react";
import ImageLightbox from "../components/ImageLightbox";
import CompanyLogos from "../components/CompanyLogos";
// import c1 from "../assets/companies/company-1.JPG";
import ResumeDownloads from "../components/ResumeDownloads";

function Chip({ children, href }) {
  if (href) {
    return (
      <a className="chip2" href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return <span className="chip2">{children}</span>;
}

function Section({ title, children, right }) {
  return (
    <section className={`card ${right ? "cardRight" : ""}`}>
      <div className="cardHead">
        <h2>{title}</h2>
      </div>
      <div className="cardBody">{children}</div>
    </section>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline2">
      {items.map((job) => (
        <article key={`${job.title}-${job.date}`} className="tItem">
          <div className="tRail">
            <span className="tDot" />
          </div>

          <div className="tContent">
            <div className="tTop">
              <h3 className="tTitle">{job.title}</h3>
              <span className="tDate">{job.date}</span>
            </div>
            <div className="tOrg">{job.org}</div>
            <ul className="tList">
              {job.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function Certificates() {
  const certs = useMemo(() => buildCertificates(), []);
  const [active, setActive] = useState(null);

  if (!certs.length) {
    return (
      <div className="muted2">
        هنوز عکسی برای سرتیفیکیت‌ها نگذاشتی. عکس‌ها رو داخل{" "}
        <code>src/assets/certificates</code> بنداز.
      </div>
    );
  }

  return (
    <>
      <div className="certGrid">
        {certs.map((c) => (
          <button
            key={c.id}
            className="certCard"
            type="button"
            onClick={() => setActive(c)}
            onContextMenu={(e) => e.preventDefault()}
          >
            <div className="certImgWrap">
              <img
                className="certImg"
                src={c.src}
                alt={c.title}
                loading="lazy"
                draggable={false}
              />
            </div>
            <div className="certTitle">{c.title}</div>
          </button>
        ))}
      </div>

      <ImageLightbox
        open={!!active}
        src={active?.src}
        title={active?.title}
        onClose={() => setActive(null)}
      />
    </>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M4 7.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 8l8 6 8-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ResumeOnePage() {
  return (
    <main className="pageWrap" dir="rtl">
      {/* HERO */}
      <header className="hero">
        <div className="heroTop">
          <div>
            <h1 className="name">{resume.name}</h1>
            <p className="subtitle">{resume.summary}</p>
          </div>

          <div className="heroMeta">
            <div className="chipsRow">
              <Chip>{resume.contact.location}</Chip>
              <Chip href={`tel:${resume.contact.phone}`}>
                {resume.contact.phone}
              </Chip>
              <Chip href={`mailto:${resume.contact.email}`}>
                <IconMail /> {resume.contact.email}{" "}
              </Chip>
            </div>

            {/* <CompanyLogos
              items={[
                { name: "نگارخانه الماس", role: "مدیریت نگارخانه/ مسئول فنی/ عکاس", logo: c1 },
                // { name: "هولدینگ اشکان", role: "مسئول فنی/ عکاس", logo: c2 },
              ]}
            /> */}

            <ResumeDownloads faHref="/resume-fa.pdf" enHref="/resume-en.pdf" />

            <div className="miniStats">
              <div className="miniStat">
                <div className="miniNum">10+</div>
                <div className="miniLbl">سال تجربه مدیریتی</div>
              </div>
              <div className="miniStat">
                <div className="miniNum">30+</div>
                <div className="miniLbl">رویداد/نمایشگاه</div>
              </div>
              <div className="miniStat">
                <div className="miniNum">15+</div>
                <div className="miniLbl">کارگاه تخصصی</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* GRID */}
      <section className="grid">
        {/* MAIN */}
        <div className="mainCol">
          <Section title="سوابق شغلی">
            <Timeline items={resume.experiences} />
          </Section>

          <Section title="نمایشگاه‌های انفرادی">
            <ul className="plainList2">
              {resume.soloExhibitions.map((x) => (
                <li key={x.title} className="listRow">
                  <div className="listStrong">{x.title}</div>
                  <div className="muted2">{x.org}</div>
                  <div className="muted2">{x.date}</div>
                </li>
              ))}
            </ul>
          </Section>

          {/* Portfolio پایین همین صفحه */}
          <div className="portfolioBlock">
            <PortfolioSection />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sideCol">
          <Section title="تحصیلات" right>
            {resume.education.map((e) => (
              <div key={`${e.degree}-${e.date}`} className="stack2">
                <div className="listStrong">{e.degree}</div>
                <div className="muted2">{e.org}</div>
                <div className="muted2">{e.date}</div>
              </div>
            ))}
          </Section>

          <Section title="مهارت‌ها" right>
            <div className="stack2">
              <div className="k">عکاسی و پردازش</div>
              <div className="muted2">{resume.skills.photography}</div>
            </div>
            <div className="stack2">
              <div className="k">مدیریت</div>
              <div className="muted2">{resume.skills.management}</div>
            </div>
            <div className="stack2">
              <div className="k">زبان‌ها</div>
              <div className="muted2">{resume.skills.languages}</div>
            </div>
          </Section>

          <Section title="گواهی‌نامه‌ها" right>
            <Certificates />
          </Section>

          <Section title="اهداف" right>
            <ul className="tList">
              {resume.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Section>
        </aside>
      </section>
    </main>
  );
}
