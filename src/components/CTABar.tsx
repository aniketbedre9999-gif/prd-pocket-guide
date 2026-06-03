import { Phone, MessageCircle } from "lucide-react";
import { useT, t } from "@/lib/i18n";

export function CTABar() {
  const tr = useT();
  return (
    <section className="bg-accent text-accent-foreground">
      <div className="container-x py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            {tr(t("Need an electrician today?", "आज इलेक्ट्रिशियन हवाय?"))}
          </h2>
          <p className="mt-1 opacity-90">
            {tr(t("Free site visit & quote across Latur.", "लातूरमध्ये मोफत साइट भेट व कोटेशन."))}
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a href="tel:+919075323452" className="btn-primary">
            <Phone className="h-4 w-4" /> {tr(t("Call +91 90753 23452", "कॉल +91 90753 23452"))}
          </a>
          <a href="https://wa.me/919075323452" target="_blank" rel="noopener noreferrer" className="btn-outline !border-primary">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
