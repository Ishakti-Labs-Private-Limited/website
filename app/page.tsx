export default function Home() {
  return (
    <main style={{ fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "56px 20px" }}>
        <header style={{ marginBottom: 48 }}>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.75 }}>Ishakti Labs</p>
          <h1 style={{ margin: "10px 0 10px", fontSize: 44, lineHeight: 1.1 }}>
            Calm Thinking. Powerful Execution.
          </h1>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, opacity: 0.85 }}>
            We help product teams improve backend reliability and delivery confidence through fixed-scope,
            AI-assisted (human-reviewed) engineering sprints.
          </p>

          <div style={{ display: "flex", gap: 12, marginTop: 22, flexWrap: "wrap" }}>
            <a
              href="mailto:hello@ishaktilabs.com?subject=Ishakti%20Reliability%20Sprint%20-%20Discovery%20Call"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                background: "#2563EB",
                color: "white",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              style={{
                padding: "12px 16px",
                borderRadius: 12,
                border: "1px solid rgba(0,0,0,0.15)",
                textDecoration: "none",
                fontWeight: 600,
                color: "#111827",
              }}
            >
              View Services
            </a>
          </div>
        </header>

        <section id="services" style={{ marginBottom: 42 }}>
          <h2 style={{ fontSize: 26, marginBottom: 10 }}>Ishakti Reliability Sprint</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7 }}>
            A <strong>2–4 week fixed-scope sprint</strong> designed to reduce backend production risk and improve
            delivery confidence.
          </p>

          <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
            <div style={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 16, padding: 14 }}>
              <p style={{ margin: 0, fontWeight: 700 }}>Best for</p>
              <p style={{ margin: "8px 0 0", opacity: 0.85, lineHeight: 1.6 }}>
                CTOs, Heads of Engineering, and Engineering Managers in B2B SaaS/product teams (8–60 engineers,
                sweet spot 10–30).
              </p>
            </div>
            <div style={{ border: "1px solid rgba(0,0,0,0.12)", borderRadius: 16, padding: 14 }}>
              <p style={{ margin: 0, fontWeight: 700 }}>Common outcomes</p>
              <ul style={{ margin: "8px 0 0", paddingLeft: 18, opacity: 0.9, lineHeight: 1.7 }}>
                <li>Reduced backend rework</li>
                <li>Stronger production readiness</li>
                <li>Cleaner implementation flow</li>
                <li>Better review & test confidence</li>
                <li>Practical reliability improvements with clear handover</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="how" style={{ marginBottom: 42 }}>
          <h2 style={{ fontSize: 26, marginBottom: 10 }}>How we work</h2>
          <ol style={{ paddingLeft: 18, lineHeight: 1.8, opacity: 0.9 }}>
            <li><strong>Diagnose</strong> — understand context, constraints, and real pain points.</li>
            <li><strong>Prioritize</strong> — define a fixed scope with highest ROI improvements.</li>
            <li><strong>Execute</strong> — AI-assisted delivery with human review gates and milestones.</li>
            <li><strong>Handover</strong> — outcome report, runbooks/checklists, and a 90-day action plan.</li>
          </ol>
        </section>

        <section id="why" style={{ marginBottom: 42 }}>
          <h2 style={{ fontSize: 26, marginBottom: 10 }}>Why Ishakti Labs</h2>
          <ul style={{ paddingLeft: 18, lineHeight: 1.8, opacity: 0.9 }}>
            <li>Engineering-first, outcome-focused execution</li>
            <li>AI-assisted delivery (human-reviewed)</li>
            <li>Built for trust, clarity, and long-term scalability</li>
            <li>Practical handover with templates and next steps</li>
          </ul>
        </section>

        <section id="contact" style={{ marginBottom: 16 }}>
          <h2 style={{ fontSize: 26, marginBottom: 10 }}>Contact</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7 }}>
            Email: <strong>hello@ishaktilabs.com</strong>
          </p>
          <a
            href="mailto:hello@ishaktilabs.com?subject=Ishakti%20Reliability%20Sprint%20Inquiry"
            style={{
              display: "inline-block",
              padding: "12px 16px",
              borderRadius: 12,
              background: "#111827",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Send an Inquiry
          </a>
        </section>

        <footer style={{ marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(0,0,0,0.12)", opacity: 0.8 }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Ishakti Labs — Engineering reliable outcomes.
          </p>
        </footer>
      </div>
    </main>
  );
}