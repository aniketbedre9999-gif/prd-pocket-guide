import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import { Award, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Ingale Electrical Service Latur" },
      { name: "description", content: "Founded in 2015, Ingale Electrical Service has served hundreds of Latur clients with licensed, safety-first electrical work." },
      { property: "og:title", content: "About Ingale Electrical Service" },
      { property: "og:description", content: "10+ years of trusted electrical work in Latur — licensed, insured, customer-first." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("About Us", "आमची ओळख"))}
        title={tr(t("Powering Latur safely since 2015", "२०१५ पासून लातूरला सुरक्षित वीजसेवा"))}
        subtitle={tr(t(
          "A licensed electrician team committed to safety and customer satisfaction.",
          "परवाना प्राप्त टीम — सुरक्षा आणि ग्राहक समाधानासाठी कटिबद्ध."
        ))}
      />
      <section className="section-y">
        <div className="container-x grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-foreground/90 leading-relaxed">
            <p>
              {tr(t(
                "Founded in 2015, Ingale Electrical Service has served hundreds of clients across Latur with top-quality electrical solutions. From small home wiring jobs to full MIDC factory installations, our team brings 10+ years of hands-on experience to every project.",
                "२०१५ साली सुरू झालेल्या इंगळे इलेक्ट्रिकल सेवेने लातूरमधील असंख्य ग्राहकांना उच्च दर्जाचे इलेक्ट्रिकल उपाय दिले आहेत. छोट्या घराच्या वायरिंगपासून मोठ्या एमआयडीसी कारखान्यांपर्यंत — १०+ वर्षांचा अनुभव."
              ))}
            </p>
            <p>
              {tr(t(
                "We are licensed electricians who believe safety comes first. Every job — whether it's a single switch or a complete building rewire — is tested, certified, and backed by our workmanship warranty.",
                "आम्ही परवाना प्राप्त इलेक्ट्रिशियन आहोत. सुरक्षा सर्वोच्च आहे — प्रत्येक काम तपासले, प्रमाणित आणि वर्क-वॉरंटीसह दिले जाते."
              ))}
            </p>
          </div>
          <aside className="space-y-4">
            <div className="card-surface">
              <h3 className="font-bold text-lg">{tr(t("At a glance", "थोडक्यात"))}</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>• {tr(t("Established 2015", "स्थापना २०१५"))}</li>
                <li>• {tr(t("500+ completed projects", "५००+ पूर्ण प्रकल्प"))}</li>
                <li>• {tr(t("Government-licensed", "सरकारी परवाना"))}</li>
                <li>• {tr(t("Serves only Latur district", "केवळ लातूर जिल्हा"))}</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
      <section className="bg-surface section-y">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-center mb-12">{tr(t("Our Core Values", "आमची मूल्ये"))}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { i: Award, t: t("Quality", "दर्जा"), d: t("We use best practices and certified materials on every job.", "उत्तम पद्धती आणि प्रमाणित साहित्य.") },
              { i: ShieldCheck, t: t("Safety", "सुरक्षितता"), d: t("All work is tested, certified and code-compliant.", "सर्व काम तपासले, प्रमाणित व मानकानुसार.") },
              { i: Heart, t: t("Trust", "विश्वास"), d: t("Transparent pricing and long-term after-service support.", "पारदर्शक दर आणि दीर्घकालीन सेवा.") },
            ].map((v, i) => (
              <div key={i} className="card-surface text-center">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                  <v.i className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold">{tr(v.t)}</h3>
                <p className="text-sm text-muted-foreground mt-2">{tr(v.d)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
