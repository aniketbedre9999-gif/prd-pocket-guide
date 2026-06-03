import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import lightingImg from "@/assets/service-lighting.jpg";

const projects = [
  {
    img: residentialImg,
    en: "Residential Complex — Khetri Nagar",
    mr: "निवासी संकुल — खेत्री नगर",
    desc: t("Complete wiring and lighting for a 30-unit apartment building.", "३० फ्लॅटच्या इमारतीची संपूर्ण वायरिंग व प्रकाश व्यवस्था."),
  },
  {
    img: commercialImg,
    en: "MIDC Factory Hall",
    mr: "एमआयडीसी कारखाना हॉल",
    desc: t("HT/LT installations including panel and machinery wiring.", "एचटी/एलटी पॅनेल आणि मशीनरी वायरिंग."),
  },
  {
    img: lightingImg,
    en: "Retail Shop Fit-out",
    mr: "रिटेल दुकान फिट-आउट",
    desc: t("Showcase lighting and electrical fit-out for a Latur market store.", "लातूर बाजारातील दुकानासाठी शोकेस लाइटिंग."),
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Our Projects — Ingale Electrical Latur" },
      { name: "description", content: "Recent electrical projects in Latur: residential complexes, MIDC factories, retail fit-outs." },
      { property: "og:title", content: "Projects — Ingale Electrical" },
      { property: "og:description", content: "Selected electrical work across Latur." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Projects", "प्रकल्प"))}
        title={tr(t("Selected work from across Latur", "लातूरमधील निवडक प्रकल्प"))}
        subtitle={tr(t("From single homes to industrial sheds — done right.", "एका घरापासून औद्योगिक शेडपर्यंत — व्यावसायिकरीत्या."))}
      />
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="card-surface !p-0 overflow-hidden">
              <img src={p.img} loading="lazy" alt={tr(t(p.en, p.mr))} className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-bold text-lg">{tr(t(p.en, p.mr))}</h3>
                <p className="text-sm text-muted-foreground mt-2">{tr(p.desc)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
