"use client";

import { useState, type CSSProperties } from "react";
import { CONTACT_EMAIL } from "@/lib/contact";

const inputStyle: CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(15,23,42,0.2)",
  fontSize: 16,
  fontFamily: "inherit",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 600,
  marginBottom: 6,
  color: "#334155",
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const company = String(fd.get("company") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim() || "(no message provided)";

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT?.trim();
    if (endpoint) {
      setStatus("sending");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: fd,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) {
          throw new Error("Form failed");
        }
        form.reset();
        setStatus("idle");
        alert("Thanks — we received your message and will reply shortly.");
      } catch {
        setStatus("error");
        alert("Something went wrong. Please email us directly.");
      }
      return;
    }

    const subject = encodeURIComponent("Ishakti Labs — Discovery request");
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nWhat would you like to discuss?\n${message}\n`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: 14, marginTop: 16 }}>
      <div>
        <label htmlFor="name" style={labelStyle}>
          Full name
        </label>
        <input id="name" name="name" type="text" required autoComplete="name" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="company" style={labelStyle}>
          Company
        </label>
        <input id="company" name="company" type="text" autoComplete="organization" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="email" style={labelStyle}>
          Work email
        </label>
        <input id="email" name="email" type="email" required autoComplete="email" style={inputStyle} />
      </div>
      <div>
        <label htmlFor="message" style={labelStyle}>
          Context (team size, top risks, timeline)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          style={{ ...inputStyle, resize: "vertical", minHeight: 100 }}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        style={{
          justifySelf: "start",
          padding: "12px 22px",
          borderRadius: 12,
          border: "none",
          background: "#2563eb",
          color: "#fff",
          fontWeight: 600,
          fontSize: 16,
          cursor: status === "sending" ? "wait" : "pointer",
        }}
      >
        {status === "sending" ? "Sending…" : "Submit request"}
      </button>
      {status === "error" && (
        <p style={{ margin: 0, fontSize: 14, color: "#b91c1c" }}>Please try again or email {CONTACT_EMAIL}.</p>
      )}
      <p style={{ margin: 0, fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
        Without <code style={{ fontSize: 12 }}>NEXT_PUBLIC_FORM_ENDPOINT</code>, submit opens your email with a
        prefilled message to {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
