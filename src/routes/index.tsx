import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ShieldCheck, Clock, Award, Zap, ArrowRight, CheckCircle2, Wrench, Lightbulb, Factory, Cable } from "lucide-react";
import heroImg from "@/assets/hero-electrician.jpg";
import { PageShell } from "@/components/PageShell";
import { CTABar } from "@/components/CTABar";
import { useT, t } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Electrician in Latur — Ingale Electrical Service | इंगळे इलेक्ट्रिकल सेवा" },
      { name: "description", content: "Quality home & commercial wiring, panel work, lighting and 24/7 emergency electrical service in Latur. 10+ years experience. Call +91 90753 23452." },
      { property: "og:title", content: "Ingale Electrical Service — Latur" },
      { property: "og:description", content: "Latur's trusted electrician. दर्जा. सुरक्षितता. वेळेवर सेवा." },
      { property: "og:image", content: heroImg },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Electrician",
          name: "Ingale Electrical Service – Latur",
          telephone: "+919075323452",
          image: heroImg,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Shop No. 5, New Renapur Naka",
            addressLocality: "Latur",
            addressRegion: "Maharashtra",
            postalCode: "413531",
            addressCountry: "IN",
          },
          openingHours: "Mo-Su 09:00-21:00",
          areaServed: "Latur, Maharashtra, India",
          priceRange: "₹₹",
          description: "Reliable electrical contracting services in Latur — wiring, installations, repairs. 10+ years experience.",
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const tr = useT();
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>
        <div className="container-x relative py-20 md:py-28 lg:py-32 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 text-accent px-3 py-1 text-xs font-semibold uppercase tracking-widest">
              <Zap className="h-3.5 w-3.5" /> Latur · लातूर
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {tr(t(
                "Quality. Safety. On-Time Electrical Service.",
                "दर्जा. सुरक्षितता. वेळेवर सेवा."
              ))}
            </h1>
            <p className="mt-5 text-lg opacity-90 max-w-xl">
              {tr(t(
                "Your one-stop solution for all electrical work in Latur — homes, shops, MIDC and row houses. 10+ years of trusted workmanship.",
                "लातूरमधील सर्व इलेक्ट्रिकल कामासाठी एकच ठिकाण — घर, दुकान, एमआयडीसी आणि रो-हाऊस. १०+ वर्षांचा विश्वास."
              ))}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+919075323452" className="btn-accent">
                <Phone className="h-4 w-4" /> {tr(t("Call Now", "आता कॉल करा"))}
              </a>
              <Link to="/contact" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-primary">
                {tr(t("Request a Quote", "कोटेशन मागवा"))} <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {[
                { n: "10+", l: t("Years", "वर्षे") },
                { n: "500+", l: t("Projects", "प्रकल्प") },
                { n: "24×7", l: t("Support", "मदत") },
              ].map((s) => (
                <div key={s.n}>
                  <div className="text-3xl font-bold text-accent">{s.n}</div>
                  <div className="text-xs opacity-80 mt-1">{tr(s.l)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-surface border-y border-border">
        <div className="container-x py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { i: ShieldCheck, l: t("Licensed & Insured", "परवाना प्राप्त") },
            { i: Award, l: t("10+ Years Experience", "१०+ वर्षांचा अनुभव") },
            { i: CheckCircle2, l: t("100% Safety Tested", "१००% सुरक्षित") },
            { i: Clock, l: t("24×7 Emergency", "२४×७ इमर्जन्सी") },
          ].map(({ i: Icon, l }, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <Icon className="h-5 w-5 text-accent shrink-0" />
              <span className="font-medium">{tr(l)}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              {tr(t("Our Services", "आमच्या सेवा"))}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {tr(t("Complete electrical solutions, end to end", "संपूर्ण इलेक्ट्रिकल उपाय — सुरुवातीपासून शेवटपर्यंत"))}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { i: Wrench, en: "Residential Wiring", mr: "घर वायरिंग", desc: t("Concealed wiring, switches, fans & appliance installation.", "छुपी वायरिंग, स्विच, पंखे व उपकरणे.") },
              { i: Factory, en: "Commercial & Industrial", mr: "व्यावसायिक व औद्योगिक", desc: t("Shops, offices, MIDC — panel work, machinery wiring, UPS.", "दुकाने, कार्यालये, एमआयडीसी — पॅनेल, मशीनरी, यूपीएस.") },
              { i: Lightbulb, en: "Lighting & Design", mr: "लाइट डिझाइन", desc: t("LED, profile patti, decorative & energy-efficient lighting.", "एलईडी, प्रोफाइल पट्टी, सजावटीची प्रकाश व्यवस्था.") },
              { i: Cable, en: "Underground Wiring", mr: "अंडरग्राउंड वायरिंग", desc: t("Trenching, conduit and concealed routing for complexes.", "ट्रेंच, कन्डुइट व छुपी जोडणी कॉम्प्लेक्ससाठी.") },
              { i: ShieldCheck, en: "MCB / DB / Panels", mr: "एमसीबी / डीबी / पॅनेल", desc: t("Safe installation and upgrade of switchgear and panels.", "स्विचगिअर व पॅनेलचे सुरक्षित इन्स्टॉलेशन.") },
              { i: Clock, en: "Emergency Repairs", mr: "तातडीच्या दुरुस्ती", desc: t("24/7 service for outages, short circuits and urgent faults.", "२४/७ इमर्जन्सी सेवा.") },
            ].map((s, i) => (
              <div key={i} className="card-surface group">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <s.i className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold">{tr(t(s.en, s.mr))}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{tr(s.desc)}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              {tr(t("View all services", "सर्व सेवा पहा"))} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-surface section-y">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              {tr(t("Why Choose Us", "का निवडावे"))}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              {tr(t("Trusted by hundreds of families and businesses in Latur", "लातूरमधील शेकडो कुटुंब आणि व्यवसायांचा विश्वास"))}
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                t("Government-licensed electricians using certified brands (Polycab, Finolex, Havells, L&T).", "सरकारी परवाना प्राप्त इलेक्ट्रिशियन — पॉलिकॅब, फायनॉलेक्स, हवेल्स, L&T."),
                t("Transparent pricing with written estimates — no hidden charges.", "पारदर्शक दर — लिहून कोटेशन, छुपे शुल्क नाहीत."),
                t("Safety-first approach: every installation tested and certified.", "सुरक्षा प्रथम: प्रत्येक काम तपासले व प्रमाणित."),
                t("6–12 month workmanship warranty with free follow-up.", "६-१२ महिने वर्क वॉरंटी व मोफत फॉलो-अप."),
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{tr(item)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img src={heroImg} alt={tr(t("Electrician working on panel", "पॅनेलवर काम करणारा इलेक्ट्रिशियन"))} className="rounded-2xl shadow-[var(--shadow-elevated)] w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground rounded-xl p-5 shadow-lg max-w-[200px]">
              <div className="text-3xl font-bold">4.9★</div>
              <div className="text-xs mt-1 font-semibold">{tr(t("Average customer rating", "सरासरी ग्राहक रेटिंग"))}</div>
            </div>
          </div>
        </div>
      </section>

      <CTABar />
    </PageShell>
  );
}
