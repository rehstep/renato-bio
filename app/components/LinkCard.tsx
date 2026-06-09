interface LinkCardProps {
  label: string;
  url: string;
}

export function LinkCard({ label, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full p-5 
                 bg-white/5 backdrop-blur-md border border-white/10 
                 rounded-2xl transition-all duration-300 
                 hover:bg-white/10 hover:border-[#820ad1] 
                 hover:shadow-[0_0_20px_rgba(130,10,209,0.3)]"
    >
      <span className="text-white font-medium text-lg">
        {label}
      </span>
    </a>
  );
}