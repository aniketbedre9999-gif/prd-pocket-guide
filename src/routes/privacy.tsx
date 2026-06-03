import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { useT, t } from "@/lib/i18n";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Terms — Ingale Electrical Latur" },
      { name: "description", content: "Privacy policy and terms of service for Ingale Electrical Service, Latur." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Legal", "कायदेशीर"))}
        title={tr(t("Privacy & Terms", "गोपनीयता आणि अटी"))}
      />
      <section className="section-y">
        <div className="container-x max-w-3xl prose-content space-y-8 text-foreground/90 leading-relaxed">
          <div>
            <h2 className="text-2xl font-bold mb-3">{tr(t("Privacy", "गोपनीयता"))}</h2>
            <p>{tr(t(
              "We respect your privacy. Any information you provide (contact details, messages) is kept confidential and used only to serve you better.",
              "आम्ही तुमची गोपनीयता मानतो. तुमच्याकडून मिळालेली माहिती (संपर्क, संदेश) गुप्त ठेवली जाते आणि सेवा देण्यासाठीच वापरली जाते."
            ))}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">{tr(t("Terms", "अटी"))}</h2>
            <p>{tr(t(
              "All work is performed as per industry standards. Quoted prices are valid for 30 days. Ingale Electrical Service is not liable for issues arising from unauthorized modifications by third parties.",
              "सर्व काम औद्योगिक मानकानुसार केले जाते. कोटेशनची वैधता ३० दिवस. तिसऱ्या व्यक्तीकडून अनधिकृत बदल झाल्यास इंगळे इलेक्ट्रिकल सेवेची जबाबदारी नाही."
            ))}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">{tr(t("Disclaimer", "अस्वीकरण"))}</h2>
            <p>{tr(t(
              "Images and content on this site are for illustration and informational purposes.",
              "या संकेतस्थळावरील प्रतिमा व मजकूर माहितीसाठी आहेत."
            ))}</p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
