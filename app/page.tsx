import type { CSSProperties } from "react";
import { ContactForm } from "./contact-form";
import { CONTACT_EMAIL } from "@/lib/contact";

/** Update `title` and `bio` with your public founder story when ready. */
const founder = {
  title: "Principal engineer–led",
  bio: "Ishakti Labs is led by hands-on engineers with deep experience shipping and operating production backends. We combine disciplined execution with clear stakeholder communication so reliability work lands as measurable outcomes—not slide decks.",
  proofPoints: [
    "Senior-level ownership across architecture, delivery, and production readiness",
    "Fixed-scope engagements with explicit milestones and review gates",
    "Practical handover: runbooks, standards, and a 90-day action plan",
  ],
};

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

const bestFit = [
  "B2B / SaaS product companies with roughly 8–60 engineers (sweet spot 10–30)",
  "Leaders accountable for uptime, releases, and roadmap predictability",
  "Teams ready to prioritize a fixed-scope sprint with clear success criteria",
  "Organizations that value documentation, review discipline, and handover quality",
];

const notFit = [
  "Open-ended staff augmentation without a defined outcome",
  "Pure frontend-only or brand-only engagements",
  "Situations needing 24/7 on-call takeover as the primary deliverable",
  "Engagements where scope cannot be bounded for a 2–4 week window",
];

const faqs = [
  {
    q: "How quickly can we start?",
    a: "Most engagements begin within 1–2 weeks after we align on scope and success criteria.",
  },
  {
    q: "What does success look like?",
    a: "Fewer release surprises, stronger operational confidence, and a clear execution path for the next quarter—with artifacts your team can own.",
  },
];

const linkMuted: React.CSSProperties = {
  color: "#2563eb",
  fontWeight: 600,
  textDecoration: "none",
  borderBottom: "1px solid rgba(37,99,235,0.35)",
};

export default function Home() {
  const bookingUrl = process.env.NEXT_PUBLIC_BOOKING_URL?.trim();

  return (
    <main style={{ fontFamily: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif", color: "#0f172a" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "56px 20px 72px" }}>
        <header style={{ marginBottom: 48 }}>
          <p style={{ margin: 0, fontSize: 13, letterSpacing: 1.2, textTransform: "uppercase", color: "#475569", fontWeight: 600 }}>
            Ishakti Labs
          </p>
          <h1 style={{ margin: "12px 0 12px", fontSize: "clamp(34px, 6vw, 54px)", lineHeight: 1.1, letterSpacing: -0.6 }}>
            Build reliable products. Ship with confidence.
          </h1>
          <p style={{ margin: 0, fontSize: 19, lineHeight: 1.7, maxWidth: 860, color: "#334155" }}>
            We partner with B2B product teams to reduce backend risk, improve release quality, and strengthen engineering execution through fixed-scope reliability sprints.
          </p>

          <div style={{ marginTop: 24, display: "flex", flexWrap: "wrap", alignItems: "center", gap: 16 }}>
            <a
              href="#contact"
              style={{
                display: "inline-block",
                padding: "12px 22px",
                borderRadius: 12,
                background: "#2563eb",
                color: "#fff",
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              Request a discovery conversation
            </a>
            <span style={{ fontSize: 15, color: "#64748b" }}>
              <a href="#services" style={linkMuted}>
                How we help
              </a>
              <span aria-hidden="true" style={{ margin: "0 8px", color: "#cbd5e1" }}>
                ·
              </span>
              <a href="#fit" style={linkMuted}>
                Is this for us?
              </a>
            </span>
          </div>
        </header>

        <section style={{ marginBottom: 40 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>2–4 week sprint</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Focused execution with clear outcomes and fast iteration loops.</p>
            </article>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>Executive clarity</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Decision-ready visibility on risk, quality, and delivery trade-offs.</p>
            </article>
            <article style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 16, padding: 16 }}>
              <p style={{ margin: 0, fontWeight: 700, fontSize: 18 }}>Execution you can trust</p>
              <p style={{ margin: "8px 0 0", lineHeight: 1.6, color: "#334155" }}>Human-reviewed implementation and handover your team can own.</p>
            </article>
          </div>
        </section>

        <section id="founder" style={{ marginBottom: 48, border: "1px solid rgba(15,23,42,0.12)", borderRadius: 18, padding: "22px 22px" }}>
          <h2 style={{ fontSize: 26, margin: "0 0 10px" }}>Leadership</h2>
          <p style={{ margin: "0 0 12px", fontSize: 16, color: "#0f172a", fontWeight: 700 }}>{founder.title}</p>
          <p style={{ margin: "0 0 16px", lineHeight: 1.75, color: "#334155", maxWidth: 900 }}>{founder.bio}</p>
          <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.85, color: "#1e293b" }}>
            {founder.proofPoints.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </section>

        <section id="fit" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Best fit / not a fit</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7, color: "#334155", maxWidth: 860 }}>
            A quick filter so we do not waste your time—or ours.
          </p>
          <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <article style={{ border: "1px solid rgba(22,163,74,0.35)", borderRadius: 16, padding: 18, background: "rgba(22,163,74,0.04)" }}>
              <h3 style={{ marginTop: 0, marginBottom: 12, fontSize: 18, color: "#065f46" }}>Best fit</h3>
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#1e293b" }}>
                {bestFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article style={{ border: "1px solid rgba(220,38,38,0.3)", borderRadius: 16, padding: 18, background: "rgba(220,38,38,0.03)" }}>
              <h3 style={{ marginTop: 0, marginBottom: 12, fontSize: 18, color: "#991b1b" }}>Not a fit</h3>
              <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 1.8, color: "#1e293b" }}>
                {notFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
          <h2 style={{ fontSize: 30, marginBottom: 8 }}>Questions</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {faqs.map((item) => (
              <article key={item.q} style={{ border: "1px solid rgba(15,23,42,0.12)", borderRadius: 12, padding: "14px 16px" }}>
                <h3 style={{ margin: "0 0 6px", fontSize: 17 }}>{item.q}</h3>
                <p style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>{item.a}</p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="contact"
          style={{
            marginBottom: 12,
            border: "1px solid rgba(15,23,42,0.12)",
            borderRadius: 18,
            padding: "24px 22px",
            background: "linear-gradient(180deg, rgba(37,99,235,0.04) 0%, #fff 48%)",
          }}
        >
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Request a discovery conversation</h2>
          <p style={{ marginTop: 0, lineHeight: 1.7, color: "#334155", maxWidth: 860 }}>
            One step: share context and a work email. We will respond with next steps. If you prefer email only, use{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "#2563eb", fontWeight: 600 }}>
              {CONTACT_EMAIL}
            </a>
            —same inbox as this form.
          </p>
          <ContactForm />
          {bookingUrl ? (
            <p style={{ margin: "20px 0 0", fontSize: 15, color: "#475569" }}>
              Prefer a calendar hold?{" "}
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#2563eb", fontWeight: 600 }}>
                Book a time
              </a>
              {" "}(same discovery intent).
            </p>
          ) : null}
        </section>

        <footer style={{ marginTop: 42, paddingTop: 18, borderTop: "1px solid rgba(15,23,42,0.12)", color: "#475569" }}>
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Ishakti Labs. Engineering reliable outcomes. ·{" "}
            <a href="#contact" style={{ color: "#2563eb", fontWeight: 600, textDecoration: "none" }}>
              Contact
            </a>
          </p>
        </footer>
      </div>
    </main>
  );
}
