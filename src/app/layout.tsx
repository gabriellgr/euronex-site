import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "./components/ScrollAnimations";

const lora = Lora({ variable: "--font-lora", subsets: ["latin"], weight: ["400", "500", "700"], style: ["normal", "italic"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"], weight: ["300", "400", "500"] });

export const metadata: Metadata = {
  title: "EuroNex | Transfers e Passeios Premium em Paris",
  description: "Mobilidade com conforto, segurança e confiança. Transfers privativos e passeios exclusivos em Paris.",
  openGraph: {
    title: "EuroNex | Transfers Premium em Paris",
    description: "Seu primeiro passo na Europa com tranquilidade.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${lora.variable} ${inter.variable}`}>
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
