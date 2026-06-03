import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import { ShieldCheck, Clock, Wrench } from "lucide-react";

export const Route = createFileRoute("/after-service")({
  head: () => ({
    meta: [
      { title: "After-Service Support & Warranty — Ingale Electrical Latur" },
      { name: "description", content: "Workmanship warranty, free safety check-ups and 24/7 support after every electrical job in Latur." },
      { property: "og:title", content: "After-Service Guarantee — Ingale Electrical" },
      { property: "og:description", content: "Our responsibility doesn't end at handover. कामानंतर आमची जबाबदारी संपत नाही." },
    ],
  }),
  component: AfterServicePage,
});

function AfterServicePage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("After-Service", "कामानंतर हमी"))}
        title={tr(t("Our responsibility doesn't end at handover", "काम संपल्यानंतर आमची जबाबदारी संपत नाही"))}
        subtitle={tr(t(
          "Every installation comes with continued support, warranty and free follow-up.",
          "प्रत्येक कामासह सतत सेवा, वॉरंटी आणि मोफत फॉलो-अप."
        ))}
      />
      <section className="section-y">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { i: ShieldCheck, t: t("6–12 Month Warranty", "६-१२ महिने वॉरंटी"), d: t("Workmanship issues fixed free of charge during the warranty period.", "वॉरंटी काळातील समस्या मोफत.") },
            { i: Clock, t: t("24/7 Emergency Hotline", "२४/७ इमर्जन्सी हॉटलाइन"), d: t("Day or night, our line stays open for urgent issues.", "दिवस-रात्र इमर्जन्सीसाठी उपलब्ध.") },
            { i: Wrench, t: t("Free Safety Check-ups", "मोफत सुरक्षा तपासणी"), d: t("Periodic safety inspection within warranty — no extra cost.", "वॉरंटी काळात नियमित सुरक्षा तपासणी मोफत.") },
          ].map((b, i) => (
            <div key={i} className="card-surface text-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground mb-4">
                <b.i className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold">{tr(b.t)}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{tr(b.d)}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
