import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    en: "Ingale Electrical Service did a fantastic job rewiring my home. Very professional and on time!",
    mr: "इंगळे इलेक्ट्रिकल सेवेने माझ्या घराची वायरिंग उत्तम केली. पूर्ण व्यावसायिक आणि वेळेवर.",
    name: "Mr. Sharma",
    loc: t("Latur", "लातूर"),
  },
  {
    en: "Quick response and reliable service for our factory's electrical panel upgrade. Highly recommended.",
    mr: "आमच्या कारखान्यातील पॅनेल सुधारण्यासाठी त्वरित सेवा. अत्यंत शिफारसीयोग्य.",
    name: "Ms. Deshmukh",
    loc: t("Ausa", "औसा"),
  },
  {
    en: "Honest pricing and clean work. They followed up even after the job was done.",
    mr: "प्रामाणिक दर आणि स्वच्छ काम. कामानंतरही त्यांनी फॉलो-अप घेतला.",
    name: "Mr. Patil",
    loc: t("Latur MIDC", "लातूर एमआयडीसी"),
  },
  {
    en: "Got our shop's lighting redone — looks amazing and electricity bill is down.",
    mr: "दुकानाची प्रकाश व्यवस्था नवीन केली — दिसायला सुंदर आणि वीजबिल कमी झालं.",
    name: "Mrs. Kulkarni",
    loc: t("Latur", "लातूर"),
  },
];

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Customer Testimonials — Ingale Electrical Latur" },
      { name: "description", content: "What Latur customers say about Ingale Electrical Service. 100% satisfaction." },
      { property: "og:title", content: "Testimonials — Ingale Electrical" },
      { property: "og:description", content: "Real reviews from homes, shops and factories across Latur." },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  const tr = useT();
  return (
    <PageShell>
      <PageHero
        kicker={tr(t("Testimonials", "ग्राहकांचे शब्द"))}
        title={tr(t("100% satisfied customers across Latur", "लातूरमध्ये १००% समाधानी ग्राहक"))}
      />
      <section className="section-y">
        <div className="container-x grid md:grid-cols-2 gap-6">
          {testimonials.map((tm, i) => (
            <figure key={i} className="card-surface">
              <Quote className="h-8 w-8 text-accent" />
              <blockquote className="mt-4 text-lg leading-relaxed">
                "{tr(t(tm.en, tm.mr))}"
              </blockquote>
              <div className="mt-4 flex items-center justify-between">
                <figcaption>
                  <div className="font-bold">{tm.name}</div>
                  <div className="text-sm text-muted-foreground">{tr(tm.loc)}</div>
                </figcaption>
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
      <CTABar />
    </PageShell>
  );
}
