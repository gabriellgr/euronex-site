"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const WA = `https://wa.me/5511915890685?text=${encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os transfers da EuroNex em Paris."
)}`;

const NAV_LINKS = [
  { label: "Transfers", href: "#servicos" },
  { label: "Tours em Paris", href: "#experiencias" },
  { label: "Versalhes", href: "#experiencias" },
  { label: "Contato", href: "#contato" },
];

const WhatsappIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={`fn-nav ${scrolled ? "fn-nav--scrolled" : "fn-nav--top"}`}>
        <div className="fn-nav__inner">

          {/* ── Logo ── */}
          <Link href="/" className="fn-logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Image
              src="/images/logo.png"
              alt="EuroNex Transfer"
              width={300}
              height={100}
              priority
              className="fn-logo__img"
            />
          </Link>

          {/* ── Desktop links ── */}
          <ul className="fn-links">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <button
                  className={`fn-link ${scrolled ? "fn-link--scrolled" : "fn-link--top"}`}
                  onClick={() => handleNavClick(l.href)}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          {/* ── CTA ── */}
          <div className="fn-cta">
            <Link
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={`fn-cta__btn ${scrolled ? "fn-cta__btn--dark" : "fn-cta__btn--light"}`}
            >
              <WhatsappIcon />
              <span>Reservar agora</span>
            </Link>

            {/* Hamburger */}
            <button
              className={`fn-burger ${scrolled ? "fn-burger--dark" : "fn-burger--light"}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div className={`fn-mobile ${menuOpen ? "fn-mobile--open" : ""}`} aria-hidden={!menuOpen}>
        <div className="fn-mobile__backdrop" onClick={() => setMenuOpen(false)} />
        <div className="fn-mobile__panel">
          <div className="fn-mobile__header">
            <Image src="/images/logo.png" alt="EuroNex Transfer" width={120} height={38} className="fn-logo__img" />
            <button className="fn-mobile__close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <ul className="fn-mobile__links">
            {NAV_LINKS.map((l, i) => (
              <li key={l.label} style={{ animationDelay: `${i * 60}ms` }}>
                <button className="fn-mobile__link" onClick={() => handleNavClick(l.href)}>
                  <span className="fn-mobile__link-num">0{i + 1}</span>
                  {l.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="fn-mobile__footer">
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="fn-mobile__wa" onClick={() => setMenuOpen(false)}>
              <WhatsappIcon />
              Falar no WhatsApp
            </Link>
            <p className="fn-mobile__note">⚡ Resposta em até 5 minutos · Em Português</p>
          </div>
        </div>
      </div>
    </>
  );
}
