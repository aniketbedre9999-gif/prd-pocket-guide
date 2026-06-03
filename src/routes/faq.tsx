import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t, type Bi } from "@/lib/i18n";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs: { q: Bi; a: Bi }[] = [
  {
    q: t("How much do you charge for home wiring?", "घर वायरिंगचे दर किती?"),
    a: t("Our rates depend on the scope of work. We offer a free quote after a site visit.", "दर कामाच्या प्रमाणानुसार ठरतात. साइट भेटीनंतर मोफत कोटेशन."),
  },
  {
    q: t("Do you provide written estimates?", "लिहून कोटेशन देता का?"),
    a: t("Yes — we always provide detailed written estimates before starting work.", "होय — काम सुरू करण्यापूर्वी तंतोतंत लिहून कोटेशन दिले जाते."),
  },
  {
    q: t("What brands of materials do you use?", "कोणत्या कंपनीचे साहित्य वापरता?"),
    a: t("Certified brands like Polycab, Finolex, Havells and L&T for safety and reliability.", "पॉलिकॅब, फायनॉलेक्स, हवेल्स आणि L&T सारख्या प्रमाणित कंपन्या."),
  },
  {
    q: t("Do you handle MIDC and industrial jobs?", "एमआयडीसी आणि औद्योगिक काम करता का?"),
    a: t("Yes — we are experienced in HT/LT industrial installations and panel work.", "होय — एचटी/एलटी औद्योगिक प्रतिष्ठापन व पॅनेलचे अनुभव."),
  },
  {
    q: t("Do you provide post-installation support?", "कामानंतर देखभाल करता का?"),
    a: t("Absolutely — every job comes with a workmanship warranty and free follow-up.", "नक्कीच — प्रत्येक कामासह वर्क-वॉरंटी आणि मोफत फॉलो-अप."),
  },
  {
    q: t("Do you offer emergency electrician service?", "इमर्जन्सी सेवा देता का?"),
    a: t("Yes — 24/7 emergency service across Latur. Call +91 90753 23452 anytime.", "होय — २४/७ इमर्जन्सी सेवा. कॉल +91 90753 23452."),
  },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Electrician FAQ — Ingale Electrical Latur" },
      { name: "description", content: "Common questions about electrical work in Latur: pricing, materials, warranty, emergency service." },
      { property: "og:title", content: "FAQ — Ingale Electrical" },
      { property: "og:description", content: "Answers to common electrician questions in Latur." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q.en,
            acceptedAnswer: { "@type": "Answer", text: f.a.en },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  const tr = useT();
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("FAQ", "वारंवार विचारले जाणारे प्रश्न"))}
        title={tr(t("Answers before you call", "कॉल करण्यापूर्वीची उत्तरे"))}
      />
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border border-border rounded-lg overflow-hidden bg-card">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left hover:bg-secondary transition-colors"
                  >
                    <span className="font-semibold">{tr(f.q)}</span>
                    {isOpen ? <Minus className="h-5 w-5 text-accent shrink-0" /> : <Plus className="h-5 w-5 text-primary shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-muted-foreground leading-relaxed">{tr(f.a)}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
