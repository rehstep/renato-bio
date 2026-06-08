// Linha 1: Declaramos o objeto de configuração mestre que o PostCSS lerá ao iniciar o projeto.
const postcssConfig = {
  
  // Linha 4: Abrimos a lista de plug-ins que vão processar as linhas de código do nosso globals.css.
  plugins: {
    
    // CORREÇÃO AQUI! Em vez de chamar 'tailwindcss', nós chamamos o novo pacote especializado.
    // É esta linha que diz à esteira para injetar o compilador moderno do Tailwind v4 nas nossas páginas.
    '@tailwindcss/postcss': {},
    
    // Mantemos o assistente de compatibilidade que injeta prefixos para navegadores mobile.
    autoprefixer: {},
  },
};

// Linha 16: Exportamos essa engrenagem ajustada para o Next.js unificar os estilos sem erros.
export default postcssConfig;