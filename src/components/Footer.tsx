import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, MessageCircle, Zap } from "lucide-react";
import { useT, t } from "@/lib/i18n";

export function Footer() {
  const tr = useT();
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display font-bold">
              <span className="block">Ingale Electrical</span>
              <span className="block text-xs opacity-80">इंगळे इलेक्ट्रिकल सेवा</span>
            </span>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            {tr(t(
              "Latur's trusted electrical contractor — quality, safety and on-time service for 10+ years.",
              "लातूरचे विश्वासू इलेक्ट्रिकल कंत्राटदार — १०+ वर्षांचा दर्जा, सुरक्षा आणि वेळेवर सेवेचा अनुभव."
            ))}
          </p>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">{tr(t("Quick Links", "मुख्य दुवे"))}</h4>
          <ul className="space-y-2 text-sm opacity-90">
            {[
              { to: "/about", label: t("About", "आमची ओळख") },
              { to: "/services", label: t("Services", "सेवा") },
              { to: "/projects", label: t("Projects", "प्रकल्प") },
              { to: "/faq", label: t("FAQ", "प्रश्न") },
              { to: "/after-service", label: t("After-Service", "कामानंतर हमी") },
              { to: "/service-area", label: t("Service Area", "सेवा क्षेत्र") },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-accent transition-colors">
                  {tr(l.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">{tr(t("Contact", "संपर्क"))}</h4>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="tel:+919075323452" className="hover:text-accent">+91 90753 23452</a>
            </li>
            <li className="flex items-start gap-2">
              <MessageCircle className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="https://wa.me/919075323452" target="_blank" rel="noopener noreferrer" className="hover:text-accent">WhatsApp</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:ingaleelectrical@example.com" className="hover:text-accent break-all">ingaleelectrical@example.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <span>Shop No. 5, New Renapur Naka,<br />Latur — 413531</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold mb-4">{tr(t("Service Hours", "सेवा वेळ"))}</h4>
          <p className="text-sm opacity-90">{tr(t("Mon – Sun: 9:00 – 21:00", "सोम – रवि: ९:०० – २१:००"))}</p>
          <p className="text-sm opacity-90 mt-1">{tr(t("24×7 Emergency Support", "२४×७ इमर्जन्सी सेवा"))}</p>
          <a href="https://wa.me/919075323452" target="_blank" rel="noopener noreferrer" className="btn-accent mt-5 text-sm !py-2 !px-4">
            <MessageCircle className="h-4 w-4" /> {tr(t("Chat on WhatsApp", "WhatsApp वर चॅट"))}
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-x py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-80">
          <p>© 2026 Ingale Electrical Service. {tr(t("All rights reserved.", "सर्व हक्क राखीव."))}</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent">{tr(t("Privacy & Terms", "गोपनीयता आणि अटी"))}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
