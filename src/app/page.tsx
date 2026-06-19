export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5" }}>
      {/* Hero */}
      <section id="home" style={{
        paddingTop: "140px", paddingBottom: "80px", textAlign: "center",
        background: "linear-gradient(180deg, #0f0f1a 0%, #0a0a0a 100%)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px" }}>
          <h1 style={{ fontSize: "48px", fontWeight: 800, color: "#fff", lineHeight: 1.15, marginBottom: "24px" }}>
            {"\u0424\u0438\u043B\u043E\u0441\u043E\u0444\u0438\u044F"}
            <br />
            <span style={{ color: "#c9a84c" }}>{"\u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430"}</span>
          </h1>
          <p style={{ fontSize: "20px", color: "#a3a3a3", lineHeight: 1.7, maxWidth: "650px", margin: "0 auto 32px" }}>
            {"\u041E\u0442 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 2.0 \u043A \u043D\u043E\u0432\u043E\u0439 \u044D\u043F\u043E\u0445\u0435 \u043F\u043E\u0438\u0441\u043A\u0430 \u0438 \u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439"}
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <a href="/blog" style={{
              display: "inline-block", padding: "14px 32px", backgroundColor: "#c9a84c", color: "#0a0a0a",
              borderRadius: "8px", fontWeight: 600, fontSize: "16px", textDecoration: "none",
            }}>
              {"\u0427\u0438\u0442\u0430\u0442\u044C \u0431\u043B\u043E\u0433"}
            </a>
            <a href="/library" style={{
              display: "inline-block", padding: "14px 32px", backgroundColor: "transparent", color: "#c9a84c",
              borderRadius: "8px", fontWeight: 600, fontSize: "16px", textDecoration: "none",
              border: "1px solid #c9a84c",
            }}>
              {"\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430"}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ padding: "80px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#c9a84c", marginBottom: "32px", textAlign: "center" }}>
            {"\u041E \u043F\u0440\u043E\u0435\u043A\u0442\u0435"}
          </h2>
          <div style={{ fontSize: "18px", lineHeight: 1.9, color: "#d4d4d4", display: "flex", flexDirection: "column", gap: "24px" }}>
            <p>
              {"\u041F\u043E\u0441\u043B\u0435 \u043A\u043D\u0438\u0433 \u0438 \u0441\u0442\u0430\u0442\u0435\u0439 \u0413\u0430\u0440\u0438 \u0425\u044D\u043C\u0435\u043B\u0430 \u0438 \u0441\u043E\u0432\u0435\u0449\u0430\u043D\u0438\u044F \u0431\u0438\u0437\u043D\u0435\u0441-\u0433\u0443\u0440\u0443 \u0432 \u041A\u0430\u043B\u0438\u0444\u043E\u0440\u043D\u0438\u0438, \u043A\u043E\u0442\u043E\u0440\u043E\u0435 \u0438 \u0441\u0447\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0434\u043D\u0451\u043C \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0439 \u0432\u0435\u0440\u0441\u0438\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 \u043F\u043E\u0434 \u0446\u0438\u0444\u0440\u0430\u043C\u0438 2.0, \u0432 \u043D\u0430\u0447\u0430\u043B\u0430\u0445 \u043A\u043E\u0442\u043E\u0440\u043E\u0433\u043E \u0444\u0438\u0433\u0443\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438 25 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u0445 \u043F\u0440\u0438\u043D\u0446\u0438\u043F\u043E\u0432, \u0441\u0430\u043C\u0430 \u0441\u043E\u0431\u043E\u0439 \u043D\u0430\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u043B\u0430\u0441\u044C \u043C\u044B\u0441\u043B\u044C: \u0430 \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043D\u0430\u043C \u0442\u0435\u043F\u0435\u0440\u044C \u0436\u0434\u0430\u0442\u044C, \u0447\u0442\u043E\u0431\u044B \u043F\u043E\u044F\u0432\u0438\u043B\u0441\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442 3.0?"}
            </p>
            <p>
              {"\u042D\u0442\u0430 \u0432\u043F\u043E\u043B\u043D\u0435 \u043B\u043E\u0433\u0438\u0447\u043D\u0430\u044F \u043C\u044B\u0441\u043B\u044C \u0432 \u0432\u0435\u043A \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0435\u0439 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u043B\u0430 \u0441\u0435\u0431\u044F \u0434\u043E\u0432\u043E\u043B\u044C\u043D\u043E \u0431\u044B\u0441\u0442\u0440\u043E \u2014 \u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435, \u043D\u0430\u0431\u0438\u0432 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0435 \u00AB\u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442 3.0\u00BB, \u043D\u0430\u0439\u0442\u0438 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0443\u0436\u0435 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u043C\u043E\u0434\u0435\u043B\u044C, \u043A\u0430\u0436\u0434\u0443\u044E \u0438\u0437 \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u0435\u0451 \u0430\u0432\u0442\u043E\u0440\u044B \u043E\u0442\u043D\u043E\u0441\u044F\u0442 \u043A \u0440\u0435\u0432\u043E\u043B\u044E\u0446\u0438\u043E\u043D\u043D\u044B\u043C 3.0."}
            </p>
            <p>
              {"\u0414\u043E\u0441\u0442\u043E\u0432\u0435\u0440\u043D\u043E \u043E\u0434\u043D\u043E: \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 2.0 \u043D\u0430\u0447\u0430\u043B\u0430\u0441\u044C \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u043D\u043E\u0432\u0430\u044F \u044D\u043F\u043E\u0445\u0430 \u2014 \u044D\u043F\u043E\u0445\u0430 \u043F\u043E\u0438\u0441\u043A\u0430 \u0438 \u043D\u043E\u0432\u0430\u0446\u0438\u0439 \u0438\u043C\u0435\u043D\u043D\u043E \u0432 \u0441\u0444\u0435\u0440\u0435 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430. \u041D\u0435 \u043D\u043E\u0432\u0430\u0446\u0438\u0438 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432, \u0430 \u043D\u043E\u0432\u0430\u0446\u0438\u0438 \u0432 \u0441\u0444\u0435\u0440\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0439. \u0418 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0445."}
            </p>
            <p>
              {"\u041F\u043E \u043D\u0430\u0448\u0435\u043C\u0443 \u0443\u0431\u0435\u0436\u0434\u0435\u043D\u0438\u044E, \u043F\u043E\u0434\u043E\u0431\u043D\u044B\u0435 \u043D\u043E\u0432\u0430\u0446\u0438\u0438, \u043E\u0434\u043D\u0430\u0436\u0434\u044B \u0443\u0441\u0432\u043E\u0435\u043D\u043D\u044B\u0435, \u0441\u043F\u043E\u0441\u043E\u0431\u043D\u044B \u0431\u043B\u0430\u0433\u043E\u0442\u0432\u043E\u0440\u043D\u043E \u0432\u043B\u0438\u044F\u0442\u044C \u043D\u0430 \u043B\u044E\u0431\u044B\u0435 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F. \u041C\u0438\u0440 \u0438\u043C\u0435\u0435\u0442 \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C\u0441\u044F. \u041D\u043E \u043E\u043D \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C\u0441\u044F, \u0435\u0441\u043B\u0438 \u043D\u0435 \u0431\u0443\u0434\u0443\u0442 \u043E\u0431\u043D\u043E\u0432\u043B\u044F\u0442\u044C\u0441\u044F \u0438 \u0438\u0437\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F \u043A \u043B\u0443\u0447\u0448\u0435\u043C\u0443 \u0447\u0435\u043B\u043E\u0432\u0435\u0447\u0435\u0441\u043A\u0438\u0435 \u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u044F. \u0418 \u043D\u043E\u0432\u044B\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 \u043C\u0435\u043D\u0435\u0434\u0436\u043C\u0435\u043D\u0442\u0430 \u0433\u043E\u0442\u043E\u0432\u044B \u043D\u0430\u043C \u0432 \u044D\u0442\u043E\u043C \u043F\u043E\u043C\u043E\u0447\u044C."}
            </p>
          </div>
        </div>
      </section>

      {/* Concepts */}
      <section id="concepts" style={{ padding: "80px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#c9a84c", marginBottom: "40px", textAlign: "center" }}>
            {"\u041C\u043E\u0434\u0435\u043B\u0438 \u0438 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438"}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {[
              { title: "Management 2.0", desc: "25 принципов нового менеджмента, заложенных Гари Хэмелом и коллегами после исторического совещания в Калифорнии." },
              { title: "Management 3.0", desc: "Современные модели управления, каждая из которых претендует на революционность в подходе к производственным отношениям." },
              { title: "PMBoK", desc: "Американский стандарт управления проектами, признанная мировая методология." },
              { title: "P2M", desc: "Японская модель управления программами, альтернативный подход к комплексному управлению." },
            ].map((item, i) => (
              <div key={i} style={{
                padding: "28px", borderRadius: "12px",
                border: "1px solid #262626", backgroundColor: "#111",
              }}>
                <h3 style={{ fontSize: "20px", fontWeight: 600, color: "#fff", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "15px", color: "#a3a3a3", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: "80px 24px", borderTop: "1px solid #1a1a1a" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontSize: "32px", fontWeight: 700, color: "#c9a84c", marginBottom: "24px" }}>
            {"\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"}
          </h2>
          <p style={{ fontSize: "18px", color: "#a3a3a3", lineHeight: 1.7 }}>
            {"\u041C\u044B \u0433\u043E\u0442\u043E\u0432\u044B \u0440\u0430\u0441\u0441\u043C\u0430\u0442\u0440\u0438\u0432\u0430\u0442\u044C \u0438 \u043E\u0437\u0432\u0443\u0447\u0438\u0432\u0430\u0442\u044C \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u0438, \u043D\u043E \u0438 \u0440\u0430\u0441\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0441\u0443\u0442\u044C \u0443\u0436\u0435 \u043F\u0440\u0438\u043D\u044F\u0442\u044B\u0445 \u043C\u0438\u0440\u043E\u043C \u043C\u043E\u0434\u0435\u043B\u0435\u0439."}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1a1a1a", padding: "32px 24px", textAlign: "center",
        color: "#404040", fontSize: "14px",
      }}>
        {"\u00A9 "} {new Date().getFullYear()} Management2plus.ru
      </footer>
    </div>
  );
}