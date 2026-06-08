// Linha 1: Importa o tipo 'NextConfig' diretamente das entranhas do Next.js.
// Isso garante que o TypeScript monitore nossas configurações, evitando que erremos os nomes das propriedades.
import type { NextConfig } from "next";

// Linha 5: Define a constante de configuração principal da nossa aplicação.
const nextConfig: NextConfig = {
  
  /* Linha 8: Abrimos o bloco de configurações dedicado exclusivamente ao comportamento
     de tratamento de mídias e imagens do framework. */
  images: {
    
    /* Linha 12: A propriedade 'remotePatterns' funciona como a nossa lista branca de segurança.
       Aqui dentro nós listamos detalhadamente quais servidores externos têm permissão 
       para passar pelo processo de otimização do nosso servidor Next.js. */
    remotePatterns: [
      {
        // Linha 17: Definimos que aceitamos apenas conexões seguras através do protocolo HTTPS.
        protocol: "https",
        
        // Linha 20: O nome exato do servidor do qual queremos consumir as imagens de teste (Unsplash).
        hostname: "images.unsplash.com",
        
        // Linha 23: Deixamos a porta vazia porque o protocolo HTTPS padrão já resolve a comunicação sozinho.
        port: "",
        
        // Linha 26: O 'pathname' configurado como '/**' funciona como um caractere curinga (wildcard).
        // Ele avisa ao Next.js que qualquer imagem vinda do Unsplash é segura, não importando a pasta ou os códigos que venham depois.
        pathname: "/**",
      },
    ],
  },
};

// Linha 34: Exporta a configuração limpa para que o compilador mestre do Next.js aplique as diretivas no sistema.
export default nextConfig;