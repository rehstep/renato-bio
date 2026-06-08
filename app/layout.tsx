// Mantemos a importação do nosso arquivo de estilos atualizado
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
    /* CORREÇÃO AQUI: Adicionamos o 'suppressHydrationWarning'.
       Isso avisa ao React para ignorar pequenas divergências causadas por extensões de terceiros
       (como tradutores ou temas escuros), impedindo que a caixa de erro flutuante trave a sua tela. */
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}