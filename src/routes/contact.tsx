import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useT, t } from "@/lib/i18n";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ingale Electrical — Latur Electrician | +91 90753 23452" },
      { name: "description", content: "Call, WhatsApp or send a message. Free site visit and quote across Latur." },
      { property: "og:title", content: "Contact — Ingale Electrical Latur" },
      { property: "og:description", content: "Get a free quote for your electrical work in Latur." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const tr = useT();
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Contact", "संपर्क"))}
        title={tr(t("Ready to talk electrical?", "इलेक्ट्रिकल कामासाठी तयार आहात का?"))}
        subtitle={tr(t("Call, WhatsApp, or send a message — we respond fast.", "कॉल, WhatsApp किंवा मेसेज — त्वरित प्रतिसाद."))}
      />
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <aside className="lg:col-span-2 space-y-4">
            <a href="tel:+919075323452" className="card-surface flex items-start gap-4 hover:!border-accent">
              <div className="h-12 w-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">{tr(t("Call", "कॉल"))}</div>
                <div className="font-bold text-lg mt-0.5">+91 90753 23452</div>
              </div>
            </a>
            <a href="https://wa.me/919075323452" target="_blank" rel="noopener noreferrer" className="card-surface flex items-start gap-4 hover:!border-accent">
              <div className="h-12 w-12 rounded-lg bg-accent text-accent-foreground flex items-center justify-center shrink-0">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">WhatsApp</div>
                <div className="font-bold text-lg mt-0.5">+91 90753 23452</div>
              </div>
            </a>
            <a href="mailto:ingaleelectrical@example.com" className="card-surface flex items-start gap-4 hover:!border-accent">
              <div className="h-12 w-12 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">{tr(t("Email", "इमेल"))}</div>
                <div className="font-semibold mt-0.5 break-all">ingaleelectrical@example.com</div>
              </div>
            </a>
            <div className="card-surface flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-secondary text-primary flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs uppercase font-semibold text-muted-foreground tracking-wider">{tr(t("Address", "पत्ता"))}</div>
                <div className="font-semibold mt-0.5">Shop No. 5, New Renapur Naka, Latur — 413531</div>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <div className="card-surface">
              <h2 className="text-2xl font-bold">{tr(t("Request a free quote", "मोफत कोटेशन मागवा"))}</h2>
              <p className="text-sm text-muted-foreground mt-1">{tr(t("Fill the form and we'll call you back within hours.", "फॉर्म भरा — आम्ही काही तासांत कॉल करू."))}</p>
              {sent ? (
                <div className="mt-6 p-6 rounded-lg bg-accent/15 border border-accent/30 flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-accent shrink-0" />
                  <div>
                    <div className="font-bold">{tr(t("Thank you!", "धन्यवाद!"))}</div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {tr(t("We will contact you soon.", "आम्ही लवकरच आपणाशी संपर्क साधू."))}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-6 grid gap-4">
                  <Field label={tr(t("Name", "नाव"))} required>
                    <input required className="form-input" placeholder={tr(t("Your full name", "आपले पूर्ण नाव"))} />
                  </Field>
                  <Field label={tr(t("Phone", "फोन"))} required>
                    <input required type="tel" pattern="[0-9]{10}" className="form-input" placeholder="10-digit mobile" />
                  </Field>
                  <Field label={tr(t("Service Needed", "हवी असलेली सेवा"))}>
                    <select className="form-input" defaultValue="">
                      <option value="" disabled>{tr(t("Select a service", "सेवा निवडा"))}</option>
                      <option>{tr(t("Residential Wiring", "घर वायरिंग"))}</option>
                      <option>{tr(t("Commercial / Industrial", "व्यावसायिक / औद्योगिक"))}</option>
                      <option>{tr(t("Lighting & Profile Patti", "लाइटिंग व प्रोफाइल पट्टी"))}</option>
                      <option>{tr(t("Panel / MCB / DB", "पॅनेल / एमसीबी / डीबी"))}</option>
                      <option>{tr(t("Emergency Repair", "इमर्जन्सी दुरुस्ती"))}</option>
                    </select>
                  </Field>
                  <Field label={tr(t("Message", "संदेश"))}>
                    <textarea rows={4} className="form-input" placeholder={tr(t("Tell us about your job", "कामाची माहिती द्या"))} />
                  </Field>
                  <button type="submit" className="btn-accent w-full sm:w-auto">
                    {tr(t("Send Message", "संदेश पाठवा"))}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)]">
          <iframe
            title="Ingale Electrical Service location"
            src="https://www.google.com/maps?q=Latur,Maharashtra,India&output=embed"
            className="w-full h-[400px] block"
            loading="lazy"
          />
        </div>
      </section>

      <style>{`
        .form-input {
          width: 100%;
          padding: 0.65rem 0.85rem;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          background: var(--background);
          font: inherit;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--primary) 18%, transparent);
        }
      `}</style>
    </PageShell>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-1.5">
        {label} {required && <span className="text-destructive">*</span>}
      </span>
      {children}
    </label>
  );
}
