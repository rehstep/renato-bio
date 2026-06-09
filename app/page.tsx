import Image from "next/image";
import { LinkCard } from "./components/LinkCard";

export default function Page() {
  const links = [
    { label: "GitHub: Projetos & Repositórios", url: "https://github.com/rehstep" },
    { label: "Instagram: Bastidores & Insights", url: "https://instagram.com/renatoqueirog" },
    { label: "WhatsApp: Conexão Direta", url: "https://wa.me/5583982033982" },
  ];

  return (
    <main className="min-h-screen flex justify-center bg-[#0d0115]">
      {/* Container fixo para simular o layout de um celular */}
      <div className="w-full max-w-[400px] flex flex-col items-center">
        
        {/* Foto de Perfil com Gradiente de transição */}
        <div className="w-full h-80 relative overflow-hidden">
          <Image 
            src="/renato.jpg" 
            alt="Renato Queiroga" 
            fill 
            className="object-cover" 
            priority 
            sizes="(max-width: 400px) 100vw, 400px" 
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0d0115] via-[#0d0115]/60 to-transparent" />
        </div>

        {/* Bio e Conteúdo */}
        <div className="-mt-20 relative z-10 px-6 text-center w-full">
           <h1 className="text-3xl font-bold text-white">Renato Queiroga</h1>
           <p className="text-[#820ad1] font-semibold mt-1 uppercase text-sm tracking-widest">
             Desenvolvedor Fullstack & Visionário
           </p>
           <p className="text-slate-400 mt-4 leading-relaxed">
             Casado com Raissa, cristão e entusiasta de tecnologia e neurociência. 
             Construindo soluções modernas para agregar valor real.
           </p>
           
           {/* Lista de Links */}
           <div className="mt-8 space-y-4 w-full">
             {links.map((link, i) => (
               <LinkCard key={i} label={link.label} url={link.url} />
             ))}
           </div>
        </div>
      </div>
    </main>
  );
}