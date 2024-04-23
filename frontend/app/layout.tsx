import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template:
      "%s | Noticias 360 | Medio de comunicación confiable en Piura y el Perú",
    default:
      "Noticias 360 | Medio de comunicación confiable en Piura y el Perú",
  },
  description:
    "Noticias verificadas de interés nacional e internacional. Únete a nuestra comunidad para estar al tanto de las últimas novedades en actualidad, política, deportes, cultura, tecnología y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
