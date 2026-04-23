"use client";
export default function NewsletterForm() {
  return (
    <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
      <div className="footer-input-wrap">
        <input type="email" placeholder="Seu e-mail" className="footer-input" />
        <button type="submit" className="footer-input-btn" aria-label="Enviar">
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
      <p className="footer-note">Receba dicas exclusivas para sua viagem a Paris.</p>
    </form>
  );
}
