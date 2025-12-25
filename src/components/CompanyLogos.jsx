export default function CompanyLogos({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="coSection" aria-label="همکاری‌های فعلی">
      <div className="coHead">
        <span className="coKicker">در حال همکاری با</span>
      </div>

      <div className="coList">
        {items.map((c) => (
          <div className="coItem" key={c.name} title={c.name}>
            <div className="coLogoBox">
              <img
                src={c.logo}
                alt={c.name}
                className="coLogo"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className="coMeta">
              <div className="coName">{c.name}</div>
              {c.role && <div className="coRole">{c.role}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
