import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import NewsletterForm from "./components/NewsletterForm";
import BookingCard from "./components/BookingCard";

const WA = `https://wa.me/5511915890685?text=${encodeURIComponent("Olá! Gostaria de saber mais sobre os transfers da EuroNex em Paris.")}`;

const ArrowRight = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const Instagram = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const Whatsapp = () => (
  <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── NAVBAR FUNCIONAL ── */}
      <Navbar />

      {/* ── HERO (LuxeEstate style) ── */}
      <header className="lx-hero">
        {/* Background image + overlays */}
        <div className="lx-hero-bg">
          <Image src="/images/hero.png" alt="Transfer de luxo em Paris" fill priority quality={90} sizes="100vw" style={{ objectFit: "cover" }} />
          <div className="lx-hero-warm-overlay" />
          <div className="lx-hero-mask" />
        </div>

        <div className="lx-hero-content">
          {/* Left column */}
          <div className="lx-hero-left aos">
            {/* Badge */}
            <div className="lx-badge">
              <span className="lx-badge-dot" />
              Disponível 24/7 em Paris
            </div>

            <h1 className="lx-hero-heading">
              Transfers exclusivos<br />
              <span className="lx-hero-heading-light">em Paris.</span>
            </h1>

            <p className="lx-hero-sub">
              Mobilidade premium com atendimento em português.
              Do aeroporto a Versalhes, com pontualidade, conforto e confiança.
            </p>

            {/* Search / booking card */}
            <BookingCard />
          </div>

          {/* Right column – stat cards */}
          <div className="lx-hero-right aos delay-1">
            <div className="lx-stat-card lx-stat-dark">
              <div className="lx-stat-number">+500</div>
              <div className="lx-stat-label">Clientes Atendidos</div>
            </div>
            <div className="lx-stat-card lx-stat-light">
              <div className="lx-stat-number lx-stat-number-dark">100%</div>
              <div className="lx-stat-label lx-stat-label-dark">Transfers Pontuais</div>
            </div>
          </div>
        </div>
      </header>

      {/* ── SERVICES ── */}
      <section className="services" id="servicos">
        <div className="services-inner">
          {/* Left */}
          <div className="aos">
            <span className="sec-label">Nossos Serviços</span>
            <h2 className="exp-title">Excelência em <span className="exp-title-muted">Mobilidade</span></h2>
            <div className="img-box">
              <Image src="/images/interior.png" alt="Interior executivo EuroNex" fill style={{ objectFit: "cover" }} quality={85} />
              <Link href={WA} target="_blank" rel="noopener noreferrer" className="img-hover">
                <div className="img-hover-inner"><span>Ver mais</span></div>
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="services-right aos delay-1">
            <p className="services-desc">
              Cada deslocamento com a EuroNex é planejado com intenção.
              Motoristas experientes, veículos executivos e suporte completo
              em português — do aeroporto ao hotel, do centro histórico
              aos palácios dos arredores.
            </p>
            <ul className="svc-list">
              {[
                { n: "01", label: "Transfer Aeroporto CDG & Orly" },
                { n: "02", label: "Excursão a Versalhes" },
                { n: "03", label: "Transfer Privativo" },
              ].map((s) => (
                <li key={s.n} className="svc-item">
                  <div className="svc-item-l">
                    <span className="svc-num">{s.n}</span>
                    <span className="svc-name">{s.label}</span>
                  </div>
                  <span className="svc-arrow"><ArrowRight /></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCES ── */}
      <section className="exp" id="experiencias">
        <div className="exp-inner">
          <div className="exp-header aos">
            <div>
              <span className="sec-label">Portfólio</span>
              <h2 className="exp-title">Experiências <span className="exp-title-muted">em Paris</span></h2>
            </div>
            <Link href={WA} target="_blank" rel="noopener noreferrer" className="exp-view-all">
              Agendar sua experiência <ArrowRight size={16} />
            </Link>
          </div>

          <div className="exp-grid">
            {/* Card 1 – Large */}
            <div className="exp-card exp-card-lg aos">
              <div className="exp-card-img-wrap-wide">
                <Image src="/images/paris.png" alt="City Tour Paris" fill style={{ objectFit: "cover" }} className="exp-img" quality={85} />
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="exp-gradient" />
                <div className="exp-info">
                  <div>
                    <div className="exp-badge-wrap">
                      <span className="exp-badge">City Tour</span>
                      <span className="exp-year">Paris</span>
                    </div>
                    <h3>Paris Clássica</h3>
                    <p>Torre Eiffel · Louvre · Notre-Dame</p>
                  </div>
                  <div className="exp-arrow-btn">
                    <span className="exp-arrow-icon"><ArrowRight /></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 – Vertical */}
            <div className="exp-card exp-card-sm aos delay-1">
              <div className="exp-card-img-wrap-tall">
                <Image src="/images/hero.png" alt="Transfer Premium" fill style={{ objectFit: "cover" }} className="exp-img" quality={85} />
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="exp-gradient" />
                <div className="exp-info">
                  <div>
                    <div className="exp-badge-wrap">
                      <span className="exp-badge">Transfer</span>
                    </div>
                    <h3>Transfer Premium</h3>
                    <p>CDG · Orly · Le Bourget</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 – Square */}
            <div className="exp-card exp-card-sm aos">
              <div className="exp-card-img-wrap-sq">
                <Image src="/images/versailles.png" alt="Versalhes" fill style={{ objectFit: "cover" }} className="exp-img" quality={85} />
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="exp-gradient" />
                <div className="exp-info">
                  <div>
                    <h3>Versalhes</h3>
                    <p>Excursão exclusiva de dia inteiro</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 – Wide */}
            <div className="exp-card exp-card-lg aos delay-1">
              <div className="exp-card-img-wrap-wide">
                <Image src="/images/interior.png" alt="Conforto Executivo" fill style={{ objectFit: "cover" }} className="exp-img" quality={85} />
                <Link href={WA} target="_blank" rel="noopener noreferrer" className="exp-gradient" />
                <div className="exp-info">
                  <div>
                    <h3>Conforto Executivo</h3>
                    <p>Frota premium · Wi-Fi · Atendimento em Português</p>
                  </div>
                  <div className="hidden-md">
                    <span style={{ fontSize: ".7rem", textTransform: "uppercase", letterSpacing: ".15em", borderBottom: "1px solid white", paddingBottom: ".25rem" }}>
                      Saiba mais
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            {/* Brand */}
            <div className="aos">
              <div className="footer-logo">Euro<span>Nex</span></div>
              <p className="footer-desc">
                Mobilidade premium em Paris. Transfers privativos,
                city tours e experiências exclusivas com atendimento em português.
              </p>
              <div className="footer-socials">
                <Instagram />
                <Whatsapp />
              </div>
            </div>

            {/* Explore */}
            <div className="footer-col aos delay-1">
              <h4>Explore</h4>
              <ul>
                <li><a href="#servicos">Transfers</a></li>
                <li><a href="#experiencias">City Tours</a></li>
                <li><a href="#experiencias">Versalhes</a></li>
                <li><a href="#experiencias">Executivo</a></li>
              </ul>
            </div>

            {/* Contato */}
            <div className="footer-col aos delay-2">
              <h4>Contato</h4>
              <address>
                <p>Paris, França</p>
                <a href={WA} target="_blank" rel="noopener noreferrer">WhatsApp: +55 11 91589-0685</a>
                <a href="mailto:contato@euronex.com">contato@euronex.com</a>
              </address>
            </div>

            {/* Newsletter */}
            <div className="footer-col aos delay-3">
              <h4>Newsletter</h4>
              <NewsletterForm />
            </div>
          </div>

          <div className="footer-bottom aos">
            <p>© {new Date().getFullYear()} EuroNex Transfers. Tous droits réservés.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacidade</a>
              <a href="#">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
