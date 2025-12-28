import "../styles/resume-min.css";
import { resume } from "../data/resume";
import PortfolioSection from "../components/PortfolioSection";
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

function CompanyLinks({ companies }) {
  if (!companies || companies.length === 0) return null;

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "12px",
      }}
    >
      <span
        style={{
          fontSize: "12px",
          fontWeight: "bold",
          alignSelf: "center",
          marginLeft: "4px",
        }}
      >
        همکاری‌ها:
      </span>
      {companies.map((co, index) => (
        <a
          key={index}
          href={co.insta}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "4px 10px",
            borderRadius: "50px", // کپسولی
            border: "1px solid #ddd",
            background: "#fff",
            textDecoration: "none",
            color: "#333",
            fontSize: "11px",
            fontWeight: "600",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#C13584";
            e.currentTarget.style.color = "#C13584";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "#ddd";
            e.currentTarget.style.color = "#333";
          }}
        >
          {/* آیکون اینستاگرام */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          {co.name}
        </a>
      ))}
    </div>
  );
}

function Timeline({ items }) {
  return (
    <div className="timeline2">
      {items.map((job, idx) => (
        <article key={idx} className="tItem">
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

function IconMail() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

export default function ResumeOnePage() {
  return (
    <main className="pageWrap" dir="rtl">
      {/* HERO */}
      {/* <header className="hero">
        <div className="heroTop">
          <div>
            <h1 className="name">{resume.name}</h1>
            <p className="subtitle">{resume.summary}</p>
          </div>
          <CompanyLinks companies={resume.companies} />
          <div className="heroMeta">
            <div className="chipsRow">
              <Chip>{resume.contact.location}</Chip>
              <Chip href={`tel:${resume.contact.phone}`}>
                {resume.contact.phone}
              </Chip>
              <Chip href={`mailto:${resume.contact.email}`}>
                <IconMail /> {resume.contact.email}
              </Chip>
            </div>
            <div style={{ marginTop: "10px" }}>
              <ResumeDownloads
                faHref="/resume-fa.pdf"
                enHref="/resume-en.pdf"
              />
            </div>{" "}
          </div>
        </div>

        
      </header> */}

      <header className="hero" style={{ marginBottom: "30px" }}>
        {/* استفاده از گرید برای چیدمان دو ستونه (متن راست، باکس تماس چپ) */}
        <div
          className="heroTop"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* ستون راست: معرفی و شرکت‌ها */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <h1
                className="name"
                style={{
                  fontSize: "40px",
                  fontWeight: "900",
                  color: "#111",
                  margin: "0 0 10px 0",
                }}
              >
                {resume.name}
              </h1>
              <p
                className="subtitle"
                style={{
                  fontSize: "14px",
                  color: "#444",
                  lineHeight: "1.8",
                  margin: 0,
                  textAlign: "justify",
                }}
              >
                {resume.summary}
              </p>
            </div>

            {/* لینک‌های شرکت (طراحی ساده و روشن) */}
            <div>
              <CompanyLinks companies={resume.companies} />
            </div>
          </div>

          {/* ستون چپ: باکس اطلاعات تماس (نسخه روشن) */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #eee",
              borderRadius: "18px",
              padding: "20px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.04)", // سایه خیلی نرم و روشن
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {/* آیتم‌های تماس */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {/* موبایل */}
              <a
                href={`tel:${resume.contact.phone}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "#f5f5f5",
                    borderRadius: "10px",
                    display: "grid",
                    placeItems: "center",
                    color: "#111",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#888",
                      fontWeight: "bold",
                    }}
                  >
                    تلفن همراه
                  </span>
                  <span
                    style={{ fontSize: "14px", fontWeight: "700" }}
                    dir="ltr"
                  >
                    {resume.contact.phone}
                  </span>
                </div>
              </a>

              {/* ایمیل */}
              <a
                href={`mailto:${resume.contact.email}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: "#333",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "#f5f5f5",
                    borderRadius: "10px",
                    display: "grid",
                    placeItems: "center",
                    color: "#111",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#888",
                      fontWeight: "bold",
                    }}
                  >
                    ایمیل
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>
                    {resume.contact.email}
                  </span>
                </div>
              </a>

              {/* آدرس */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  color: "#333",
                }}
              >
                <div
                  style={{
                    width: "38px",
                    height: "38px",
                    background: "#f5f5f5",
                    borderRadius: "10px",
                    display: "grid",
                    placeItems: "center",
                    color: "#111",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      fontSize: "10px",
                      color: "#888",
                      fontWeight: "bold",
                    }}
                  >
                    لوکیشن
                  </span>
                  <span style={{ fontSize: "13px", fontWeight: "700" }}>
                    {resume.contact.location}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ borderTop: "1px dashed #eee", paddingTop: "16px" }}>
              <ResumeDownloads
                faHref="/resume-fa.pdf"
                enHref="/resume-en.pdf"
              />
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
                  <strong>{x.title}</strong> –{" "}
                  <span style={{ fontSize: "12px", color: "#666" }}>
                    {x.org} ({x.date})
                  </span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Portfolio */}
          <div className="portfolioBlock">
            <PortfolioSection />
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="sideCol">
          <Section title="تحصیلات" right>
            {resume.education.map((e) => (
              <div
                key={`${e.degree}-${e.date}`}
                style={{ marginBottom: "8px" }}
              >
                <div style={{ fontWeight: "900", fontSize: "13px" }}>
                  {e.degree}
                </div>
                <div style={{ color: "#666", fontSize: "12px" }}>{e.org}</div>
                <div style={{ color: "#888", fontSize: "11px" }}>{e.date}</div>
              </div>
            ))}
          </Section>

          <Section title="مهارت‌ها" right>
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  marginBottom: "4px",
                }}
              >
                عکاسی:
              </div>
              <div
                style={{ fontSize: "13px", lineHeight: "1.6", color: "#444" }}
              >
                {resume.skills.photography}
              </div>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  marginBottom: "4px",
                }}
              >
                مدیریت:
              </div>
              <div
                style={{ fontSize: "13px", lineHeight: "1.6", color: "#444" }}
              >
                {resume.skills.management}
              </div>
            </div>
            <div>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "13px",
                  marginBottom: "4px",
                }}
              >
                زبان‌ها:
              </div>
              <div
                style={{ fontSize: "13px", lineHeight: "1.6", color: "#444" }}
              >
                {resume.skills.languages}
              </div>
            </div>
          </Section>

          {/* تغییر این بخش به لیست ساده متنی طبق درخواست */}
          <Section title="گواهی‌نامه‌ها" right>
            <ul className="plainList2">
              {resume.skills.certificates.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </Section>

          <Section title="اهداف" right>
            <ul className="plainList2">
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
