"use client";
import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes animationIn {
        from { opacity: 0; transform: translateY(40px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .aos { opacity: 0; }
      .aos.animate { animation: animationIn 1s ease-out forwards; }
      .aos.delay-1 { animation-delay: 0.1s; }
      .aos.delay-2 { animation-delay: 0.2s; }
      .aos.delay-3 { animation-delay: 0.3s; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #0a0a0a; }
      ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
      ::-webkit-scrollbar-thumb:hover { background: #555; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("animate");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );

    document.querySelectorAll(".aos").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
