const servicePillars = [
  {
    title: "Architecture and reliability review",
    detail:
      "Find single points of failure, fragile release paths, and scaling risks before they become incidents.",
  },
  {
    title: "Delivery acceleration",
    detail:
      "Improve flow with practical test strategy, quality gates, and release hygiene that engineering teams adopt quickly.",
  },
  {
    title: "Production readiness",
    detail:
      "Implement observability, on-call runbooks, and actionable reliability standards for predictable operations.",
  },
];

const differentiators = [
  "Senior engineering execution with business-first prioritization",
  "Fixed scope and clear milestones to reduce uncertainty",
  "Human-reviewed AI-assisted delivery for speed with accountability",
  "Practical handover docs, checklists, and 90-day action plan",
];

const faqs = [
  {
    q: "Who is this best suited for?",
    a: "B2B product companies with 8-60 engineers where backend reliability and release confidence are critical for growth.",
  },
  {
    q: "How quickly can we start?",
    a: "Most engagements begin within 1-2 weeks after a discovery call and scope alignment.",
  },
  {
    q: "What does success look like?",
    a: "Fewer release surprises, better operational confidence, and a clear execution path for the next quarter.",
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#0f172a" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 20px 72px" }}>
        <header style={{ marginBottom: 56 }}>
          <p style={{ margin: 0, fontSize: 13, letterSpacing: 1.2, textTransform: "uppercase", color: "#475569", fontWeight: 600 }}>
            Ishakti Labs
          </p>
          <h1 style={{ margin: "12px 0 12px", fontSize: "clamp(34px, 6vw, 54px)", lineHeight: 1.1, letterSpacing: -0.6 }}>
            Build reliable products. Ship with confidence.
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.7, maxWidth: 860, color: "#334155" }}>
            We partner with B2B product teams to reduce backend risk, improve release quality, and strengthen engineering execution through fixed-scope reliability sprints.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
            <a
              href="mailto:hello@ishaktilabs.com?subject=Ishakti%20Reliability%20Sprint%20-%20Discovery%20Call"
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                background: "#2563eb",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Book Discovery Call
            </a>
            <a
              href="#services"
              style={{
                padding: "12px 18px",
                borderRadius: 12,
                border: "1px solid rgba(15,23,42,0.2)",
                textDecoration: "none",
                fontWeight: 600,
                color: "#0f172a",
                background: "#fff",
              }}
            >
              Explore Services
            </a>
          </div>
        </header>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>2-4 week sprint</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Focused execution with clear outcomes and fast iteration loops.</p>
            </article>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>CTO-level clarity</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Decision-ready visibility on risk, quality, and delivery trade-offs.</p>
            </article>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>Execution you can trust</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Human-reviewed implementation and handover your team can own.</p>
            </article>
          </div>
        </section>

        <section id="services" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Reliability Sprint Services</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7, color: "#334155", maxWidth: 860 }}>
            A practical engagement model designed for product leaders who need quality outcomes without long consulting cycles.
          </p>
          <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
            {servicePillars.map((pillar) => (
              <article key={pillar.title} style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
                <h3 style={{ marginTop: 0, marginBottom: 8, fontSize: 19 }}>{pillar.title}</h3>
                <p style={{ margin: 0, lineHeight: 1.7, color: "#334155" }}>{pillar.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Engagement Process</h2>
          <ol style={{ paddingLeft: 20, lineHeight: 1.9, color: "#1e293b" }}>
            <li>
              <strong>Diagnose:</strong> Align on business context, technical constraints, and top reliability risks.
            </li>
            <li>
              <strong>Prioritize:</strong> Define fixed sprint scope with measurable outcomes and milestones.
            </li>
            <li>
              <strong>Execute:</strong> Deliver improvements with review gates and stakeholder visibility.
            </li>
            <li>
              <strong>Handover:</strong> Transfer runbooks, standards, and next-step plan for sustained impact.
            </li>
          </ol>
        </section>

        <section id="why" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Why Teams Choose Ishakti Labs</h2>
          <ul style={{ paddingLeft: 20, lineHeight: 1.9, color: "#1e293b" }}>
            {differentiators.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Frequently Asked Questions</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map((item) => (
              <article key={item.q} style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 12, padding: "14px 16px" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 17 }}>{item.q}</h3>
                <p style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" style={{ marginBottom: 12, border: "1px solid rgba(15,23,42,0.12)", borderRadius: 18, padding: 20 }}>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Ready to raise delivery confidence?</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7, color: "#334155" }}>
            Email us at <strong>hello@ishaktilabs.com</strong> with your current reliability challenge and we will respond with a practical next-step proposal.
          </p>
          <a
            href="mailto:hello@ishaktilabs.com?subject=Ishakti%20Reliability%20Sprint%20Inquiry"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              background: "#0f172a",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Send Inquiry
          </a>
        </section>

        <footer style={{ marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(15,23,42,0.12)", color: "#475569" }}>
          <p style={{ margin: 0 }}>© {new Date().getFullYear()} Ishakti Labs. Engineering reliable outcomes.</p>
        </footer>
      </div>
    </main>
  );
}