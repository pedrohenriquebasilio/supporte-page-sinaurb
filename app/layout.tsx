import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suporte - Sua Cidade Mais Limpa",
  description:
    "Central de suporte do Sua Cidade Mais Limpa, o app da TechUrb para monitoramento inteligente da coleta seletiva.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700;800;900&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
