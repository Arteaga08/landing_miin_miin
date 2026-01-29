import { Instagram, Music2 } from "lucide-react"; // Music2 es genial para TikTok

const Footer = () => {
  return (
    <footer className="bg-white border-t-4 border-black mt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex flex-col items-center text-center gap-4">
          {/* Logo o Nombre */}
          <div className="space-y-2">
            <h2 className="text-3xl font-black uppercase tracking-tighter italic">
              Miin <span className="text-mun-pink">Miin</span>
            </h2>
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">
              Tienda K-Beauty
            </p>
          </div>

          {/* REDES SOCIALES */}
          <div className="flex gap-6">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/miin_miin888/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_#000000] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <Instagram
                  size={28}
                  className="text-black group-hover:text-mun-pink transition-colors"
                />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest">
                Instagram
              </span>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@miin_miin888"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2"
            >
              <div className="bg-white border-2 border-black p-4 rounded-2xl shadow-[4px_4px_0px_0px_#000000] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
                <Music2
                  size={28}
                  className="text-black group-hover:text-mun-pink transition-colors"
                />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest">
                TikTok
              </span>
            </a>
          </div>

          {/* Mensaje de Cierre */}
          <div className="pt-8 border-t border-black/5 w-full max-w-xs">
            <p className="text-[9px] font-bold text-black/30 uppercase leading-loose">
              © 2026 Miin Miin <br />
              Desde Seúl para México
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
