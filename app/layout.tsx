import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Renato Queiroga | Link na Bio",
  description: "Soluções modernas para agregar valor real na vida das pessoas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}