import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Zap } from "lucide-react";
import { useLang, useT, t } from "@/lib/i18n";

const navItems = [
  { to: "/", label: t("Home", "मुख्यपृष्ठ") },
  { to: "/about", label: t("About", "आमची ओळख") },
  { to: "/services", label: t("Services", "सेवा") },
  { to: "/projects", label: t("Projects", "प्रकल्प") },
  { to: "/testimonials", label: t("Testimonials", "अभिप्राय") },
  { to: "/faq", label: t("FAQ", "प्रश्न") },
  { to: "/contact", label: t("Contact", "संपर्क") },
] as const;

export function Header() {
  const { lang, setLang } = useLang();
  const tr = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="bg-primary text-primary-foreground text-xs">
        <div className="container-x flex items-center justify-between py-1.5">
          <span className="hidden sm:inline">
            {tr(t("Latur's trusted electrician — 10+ years", "लातूरचे विश्वासू इलेक्ट्रिशियन — १०+ वर्षे"))}
          </span>
          <a href="tel:+919075323452" className="inline-flex items-center gap-1.5 font-semibold hover:text-accent">
            <Phone className="h-3.5 w-3.5" /> +91 90753 23452
          </a>
        </div>
      </div>
      <div className="container-x flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-bold leading-tight">
            <span className="block text-base text-foreground">Ingale Electrical</span>
            <span className="block text-[11px] text-muted-foreground">इंगळे इलेक्ट्रिकल सेवा · Latur</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "px-3 py-2 text-sm font-semibold text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {tr(item.label)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center text-xs font-semibold rounded-md border border-border overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1 transition-colors ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-background text-foreground/70 hover:bg-secondary"}`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("mr")}
              className={`px-2.5 py-1 transition-colors ${lang === "mr" ? "bg-primary text-primary-foreground" : "bg-background text-foreground/70 hover:bg-secondary"}`}
            >
              मराठी
            </button>
          </div>
          <a href="tel:+919075323452" className="hidden md:inline-flex btn-accent text-sm !py-2 !px-4">
            <Phone className="h-4 w-4" /> {tr(t("Call Now", "कॉल करा"))}
          </a>
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-medium text-foreground/80 hover:text-primary"
                activeProps={{ className: "py-2.5 text-sm font-semibold text-primary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {tr(item.label)}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded ${lang === "en" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
              >
                EN
              </button>
              <button
                onClick={() => setLang("mr")}
                className={`px-3 py-1.5 text-xs font-semibold rounded ${lang === "mr" ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
              >
                मराठी
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
