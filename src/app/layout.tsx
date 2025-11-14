import type { Metadata } from "next";

import "./globals.css";
import AppHeaderComponent from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "CustomerCtl",
  description: "Gestão de clientes e chamados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <AppHeaderComponent />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
