import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import { MapPin } from "lucide-react";

const areas = [
  "Latur City", "Ausa", "Renapur", "Udgir", "Nilanga", "Ahmadpur",
  "Chakur", "Shirur Anantpal", "Deoni", "Jalkot", "MIDC Latur", "Khetri Nagar",
];

export const Route = createFileRoute("/service-area")({
  head: () => ({
    meta: [
      { title: "Service Area — Latur District | Ingale Electrical" },
      { name: "description", content: "We serve all of Latur city and surrounding areas across Latur district, Maharashtra." },
      { property: "og:title", content: "Service Area — Latur" },
      { property: "og:description", content: "Latur city and surrounding talukas covered." },
    ],
  }),
  component: AreaPage,
});

function AreaPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Service Area", "सेवा क्षेत्र"))}
        title={tr(t("Proudly serving only Latur district", "केवळ लातूर जिल्ह्यात सेवा"))}
        subtitle={tr(t("Local team, fast response, deep knowledge of Latur's neighbourhoods.", "स्थानिक टीम, त्वरित प्रतिसाद, लातूरची संपूर्ण माहिती."))}
      />
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold">{tr(t("Areas we cover", "आम्ही कव्हर करत असलेली ठिकाणे"))}</h2>
            <div className="mt-6 grid grid-cols-2 gap-2">
              {areas.map((a) => (
                <div key={a} className="flex items-center gap-2 p-3 rounded-lg bg-surface border border-border">
                  <MapPin className="h-4 w-4 text-accent" />
                  <span className="text-sm font-medium">{a}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
            <iframe
              title="Latur location map"
              src="https://www.google.com/maps?q=Latur,Maharashtra,India&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
