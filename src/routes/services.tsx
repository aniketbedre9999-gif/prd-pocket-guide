import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import lightingImg from "@/assets/service-lighting.jpg";
import { CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Latur — Wiring, Panels, Lighting | Ingale" },
      { name: "description", content: "Residential, commercial & industrial electrical services in Latur: house wiring, panel work, lighting, profile patti, emergency repairs." },
      { property: "og:title", content: "Our Services — Ingale Electrical Latur" },
      { property: "og:description", content: "Full-service electrical contractor for Latur homes, shops, MIDC and offices." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: residentialImg,
    en: "Residential Electrical",
    mr: "घरगुती इलेक्ट्रिकल सेवा",
    desc: t(
      "From home wiring and lighting to appliance installation, our certified electricians handle all residential needs safely and efficiently.",
      "घरातील वायरिंग, प्रकाश व्यवस्था, उपकरणे — सर्व काही सुरक्षित आणि कार्यक्षम पद्धतीने."
    ),
    points: [
      t("House wiring & rewiring", "घर वायरिंग व पुनर्वायरिंग"),
      t("Light, fan & appliance installation", "लाइट, पंखे व उपकरणे"),
      t("Concealed wiring", "छुपी वायरिंग"),
      t("Electrical safety inspection", "सुरक्षा तपासणी"),
    ],
  },
  {
    img: commercialImg,
    en: "Commercial & Industrial",
    mr: "व्यावसायिक व औद्योगिक सेवा",
    desc: t(
      "End-to-end electrical solutions for shops, offices, factories and MIDC. Panel installations, machinery wiring, UPS & generator connections.",
      "दुकाने, कार्यालये, कारखाने व एमआयडीसीसाठी संपूर्ण इलेक्ट्रिकल उपाय — पॅनेल, मशीनरी वायरिंग, यूपीएस/जेनेरेटर."
    ),
    points: [
      t("HT/LT installations", "एचटी/एलटी इन्स्टॉलेशन"),
      t("Panel & switchgear", "पॅनेल व स्विचगिअर"),
      t("Machinery wiring", "मशीनरी वायरिंग"),
      t("Routine maintenance contracts", "नियमित देखभाल करार"),
    ],
  },
  {
    img: lightingImg,
    en: "Lighting & Specialty Work",
    mr: "लाईट डिझाइन व विशेष काम",
    desc: t(
      "Modern lighting design with LED, profile patti, underground wiring and decorative installations.",
      "एलईडी, प्रोफाइल पट्टी, अंडरग्राउंड वायरिंग आणि सजावटीची प्रकाश व्यवस्था."
    ),
    points: [
      t("Profile patti / aluminium channel", "प्रोफाइल पट्टी / अॅल्युमिनियम चॅनेल"),
      t("Underground wiring", "अंडरग्राउंड वायरिंग"),
      t("Decorative & LED lighting", "सजावट व एलईडी लाइटिंग"),
      t("Smart lighting solutions", "स्मार्ट लाइटिंग"),
    ],
  },
];

function ServicesPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Services", "आमच्या सेवा"))}
        title={tr(t("Every electrical service Latur needs — under one roof", "लातूरला हवी असलेली प्रत्येक इलेक्ट्रिकल सेवा"))}
        subtitle={tr(t("Licensed, insured and ready 24/7.", "परवाना प्राप्त, विमाधारी आणि २४/७ उपलब्ध."))}
      />
      <section className="section-y">
        <div className="container-x space-y-16">
          {services.map((s, i) => (
            <div key={i} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
              <img
                src={s.img}
                alt={tr(t(s.en, s.mr))}
                loading="lazy"
                className="rounded-2xl shadow-[var(--shadow-card)] aspect-[4/3] object-cover w-full"
              />
              <div className="lg:[direction:ltr]">
                <h2 className="text-3xl font-bold">{tr(t(s.en, s.mr))}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{tr(s.desc)}</p>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                  {s.points.map((p, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{tr(p)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
