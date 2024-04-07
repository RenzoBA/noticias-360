import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noticias 360 - Medio de comunicación confiable en Piura y el Perú",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
