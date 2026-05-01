import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Мария Григорьева - Профессиональный визаж и стилизация",
  description:
    "Визажист Мария Григорьева - профессиональный макияж, прически и полный образ для любых событий. Записывайтесь на консультацию прямо сейчас.",
  keywords: [
    "визажист",
    "макияж",
    "прическа",
    "визаж",
    "профессиональный макияж",
    "Мария Григорьева",
  ],
  openGraph: {
    title: "Мария Григорьева - Профессиональный визаж и стилизация",
    description:
      "Услуги визажа и стилизации на высшем уровне. Качество, профессионализм и индивидуальный подход.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${playfairDisplay.variable} ${montserrat.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
