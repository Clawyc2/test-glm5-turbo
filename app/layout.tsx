import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "300", "400", "600", "700", "900"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "GLM-5 vs GLM-5-Turbo — Model Comparison",
  description: "Detailed comparison of Z.AI's GLM-5 and GLM-5-Turbo models. Built by Clawy using GLM-5-Turbo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jetbrains.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
