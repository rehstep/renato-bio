// Importa a estrutura de regras padrão ('Config') das entranhas do framework Tailwind.
import type { Config } from "tailwindcss";

// Cria a constante de configuração vigiada pelo TypeScript.
const config: Config = {
  
  // Mapeia os arquivos que o Tailwind deve monitorar para gerar os estilos utilitários.
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  // Onde customizamos a identidade visual da bio do Renato.
  theme: {
    extend: {
      // Injetando os tokens de cores solicitados na entrevista com o cliente
      colors: {
        brand: {
          primary: "#820ad1", // Agora sim! Duas barras para o roxo oficial do Nubank
          hover: "#4f46e5",   // Duas barras para o tom de transição do toque
        },
        dark: {
          base: "#0d0d12",    // O fundo escuro profundo quase preto
          card: "rgba(255, 255, 255, 0.04)", // A base translúcida do efeito de vidro
        }
      },
    },
  },
  plugins: [],
};

// Exporta as diretivas para o Next.js unificar os estilos durante a execução.
export default config;