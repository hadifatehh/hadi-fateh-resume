import "../styles/resume.css";
import { resume } from "../data/resume";
import PortfolioSection from "../components/PortfolioSection";

export default function ResumePage() {
  return (
    <main className="resumePage" dir="rtl">
      <header className="resumeHero">
        <div className="resumeHeroTop">
          <h1 className="resumeName">{resume.name}</h1>

          <div className="resumeContact">
            <span>{resume.contact.location}</span>
            <span> | </span>
            <a href={`tel:${resume.contact.phone}`}>{resume.contact.phone}</a>
            <span> | </span>
            <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          </div>
        </div>

        <section className="resumeCard">
          <h2>خلاصه حرفه‌ای</h2>
          <p>{resume.summary}</p>
        </section>
      </header>

      <section className="resumeGrid">
        <section className="resumeCard">
          <h2>سوابق شغلی</h2>
          <div className="timeline">
            {resume.experiences.map((job) => (
              <article className="timelineItem" key={`${job.title}-${job.date}`}>
                <div className="timelineDot" />
                <div className="timelineBody">
                  <div className="timelineHead">
                    <h3>{job.title}</h3>
                    <div className="muted">{job.date}</div>
                  </div>
                  <div className="muted">{job.org}</div>
                  <ul>
                    {job.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="resumeCard">
          <h2>تحصیلات</h2>
          {resume.education.map((e) => (
            <div key={`${e.degree}-${e.date}`} className="stack">
              <strong>{e.degree}</strong>
              <div className="muted">{e.org}</div>
              <div className="muted">{e.date}</div>
            </div>
          ))}

          <hr className="hr" />

          <h2>نمایشگاه‌های انفرادی</h2>
          <ul className="plainList">
            {resume.soloExhibitions.map((x) => (
              <li key={x.title}>
                <strong>{x.title}</strong>
                <div className="muted">{x.org}</div>
                <div className="muted">{x.date}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="resumeCard">
          <h2>مهارت‌ها و گواهینامه‌ها</h2>

          <div className="stack">
            <strong>عکاسی و پردازش تصویر</strong>
            <div className="muted">{resume.skills.photography}</div>
          </div>

          <div className="stack">
            <strong>مهارت‌های مدیریتی</strong>
            <div className="muted">{resume.skills.management}</div>
          </div>

          <div className="stack">
            <strong>زبان‌ها</strong>
            <div className="muted">{resume.skills.languages}</div>
          </div>

          <div className="stack">
            <strong>سایر گواهینامه‌ها</strong>
            <ul>
              {resume.skills.certificates.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="resumeCard">
          <h2>اهداف و علاقه‌مندی‌های حرفه‌ای</h2>
          <ul>
            {resume.goals.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </section>
      </section>

      {/* Portfolio پایین همین صفحه */}
      <section className="portfolioWrap">
        <PortfolioSection />
      </section>
    </main>
  );
}
