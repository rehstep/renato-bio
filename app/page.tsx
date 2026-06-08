import Image from "next/image";

export default function Page() {
  // Linha 5: Central de links definitiva, carregando as suas conexões reais.
  // Cada URL foi estruturada seguindo os padrões oficiais de segurança e alta disponibilidade das plataformas.
  const links = [
    {
      title: "Projetos & Repositórios",
      subtitle: "Explore meu ecossistema de códigos, sistemas web e automações no GitHub",
      url: "https://github.com/rehstep?tab=repositories",
    },
    {
      title: "Instagram Profissional",
      subtitle: "Acompanhe meus bastidores, insights de marketing, teologia e tecnologia",
      url: "https://www.instagram.com/renatoqueirog",
    },
    {
      title: "Conexão Direta no WhatsApp",
      subtitle: "Fale diretamente comigo para consultorias, parcerias e novos sistemas",
      url: "https://wa.me/5583982033982",
    },
  ];

  return (
    <main className="min-h-screen bg-dark-base text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-md relative flex flex-col items-center">
        
        {/* Seção Hero - Sua foto local 'renato.jpg' perfeitamente integrada */}
        <div className="w-full h-80 relative overflow-hidden">
          <Image 
            src="/renato.jpg" 
            alt="Foto de perfil profissional de Renato Queiroga"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/70 to-transparent" />
        </div>

        {/* Bloco de Textos de Identidade Espiritual e Profissional */}
        <div className="-mt-20 relative px-6 text-center flex flex-col items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">
            Renato Queiroga
          </h1>
          <p className="text-brand-primary text-sm font-semibold mt-1 uppercase tracking-widest">
            Desenvolvedor Fullstack & Visionário
          </p>
          <p className="text-slate-400 text-base mt-4 leading-relaxed max-w-sm">
            Casado com Raissa Mirelly, cristão e entusiasta de tecnologia, teologia e neurociência. 
            Construindo soluções modernas para agregar valor real na vida das pessoas através da internet.
          </p>
        </div>

        {/* Seção de Links com Efeito de Vidro Jateado (Glassmorphism) */}
        <div className="w-full px-6 mt-8 space-y-4 pb-12">
          
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-dark-card backdrop-blur-md border border-white/10 rounded-2xl transition-all duration-300 hover:border-brand-primary/50 hover:bg-white/10 group"
            >
              <div className="flex flex-col text-left">
                {/* O Título Principal do Link ganha o tom roxo ao sofrer a interação (hover) */}
                <span className="font-bold text-white text-lg group-hover:text-brand-primary transition-colors duration-300">
                  {link.title}
                </span>
                
                {/* Descrição contextual detalhada */}
                <span className="text-sm text-slate-400 mt-0.5 leading-snug">
                  {link.subtitle}
                </span>
              </div>
            </a>
          ))}

        </div>
      </div>

      <footer className="w-full text-center text-xs text-slate-500 py-6">
        © {new Date().getFullYear()} Renato Queiroga. Todos os direitos reservados.
      </footer>

    </main>
  );
}