import { Sparkles, Check } from "lucide-react";

const SubscriptionSection = () => {
  const telefono = "526181473443";

  const handleSubscribe = (plan, precio, detalle = "") => {
    const encabezado = "¡Hola Miin Miin! ✨ ";
    const mensaje = `Me gustaría unirme al club con el plan *${plan}* (${precio})${detalle}. 🎀`;

    const mensajeCompleto =
      encabezado +
      mensaje +
      "\n\n¿Me podrían indicar los pasos para activar mi suscripción? ¡Gracias! 🧸";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeCompleto)}`;

    window.open(url, "_blank");
  };

  return (
    <section className="py-12 px-4 md:px-0">
      {/* Título de la sección */}
      <div className="flex items-center gap-2 mb-10">
        <div className="bg-black p-1.5 rounded-lg shadow-[3px_3px_0px_0px_#EA8A8A]">
          <Sparkles className="text-white fill-white" size={20} />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter italic">
          Miin Miin Club
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* PLAN 1: MENSUAL - $599 */}
        <div className="relative bg-white border-4 border-black rounded-[40px] p-8 shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all group">
          {/* ETIQUETA CORREGIDA */}
          <div className="absolute -top-4 -right-2 bg-yellow-300 border-2 border-black px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest -rotate-6 z-20">
            Más Vendido ✨
          </div>

          <h4 className="text-3xl font-black uppercase italic mb-1">
            Essential Box
          </h4>
          <p className="text-gray-500 text-[10px] font-black uppercase mb-6 tracking-widest">
            Tu rutina paso a paso
          </p>

          <div className="text-5xl font-black text-mun-pink mb-6 tracking-tighter">
            $599<span className="text-lg text-black/40 italic">/mes</span>
          </div>

          <ul className="space-y-4 mb-10">
            {[
              "6 Productos (1 Full Size + 5 minis)",
              "Guía de aplicación K-Beauty",
              "1 Regalo sorpresa especial",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[11px] font-black uppercase tracking-tighter"
              >
                <div className="shrink-0 w-2.5 h-2.5 bg-black rounded-full" />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => handleSubscribe("Essential Box", "$599/mes")}
            className="w-full py-4 bg-white border-2 border-black rounded-full font-black uppercase text-xs shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-white transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            ¡Empezar mi rutina!
          </button>
        </div>

        {/* PLAN 2: TRIMESTRAL - $579 (QUITAMOS overflow-hidden PARA QUE SE VEA LA ETIQUETA) */}
        <div className="relative bg-mun-pink border-4 border-black rounded-[40px] p-8 shadow-[8px_8px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          {/* ETIQUETA CORREGIDA Y CON NUEVO TEXTO */}
          <div className="absolute -top-4 -right-2 bg-black text-white border-2 border-white px-4 py-1 rounded-full font-black text-[10px] uppercase tracking-widest rotate-6 z-20">
            Miin Miin Lover
          </div>

          <h4 className="text-3xl font-black text-white uppercase italic mb-1">
            Miin Miin fan club
          </h4>
          <p className="text-white/80 text-[10px] font-black uppercase mb-6 tracking-widest">
            3 meses de Glow total
          </p>

          <div className="text-5xl font-black text-white mb-2 tracking-tighter">
            $579 <span className="text-lg text-white/40 italic">/mes</span>
          </div>
          <p className="text-white/80 text-[9px] font-black uppercase mb-6 italic">
            * Pago único de $1737 por los 3 meses
          </p>

          <ul className="space-y-4 mb-10 relative z-10">
            {[
              "Todo lo del plan Essential",
              "Acceso exclusivo a preventas",
              "Muestras premium adicionales",
              "Acceso VIP a nuevos lanzamientos",
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-[11px] font-black text-white uppercase tracking-tighter"
              >
                <Check size={18} strokeWidth={4} className="shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <button 
            onClick={() => handleSubscribe("Miin Miin Fan Club", "$1737", " (Pase Trimestral)")}
            className="w-full py-4 bg-white border-2 border-black rounded-full font-black uppercase text-xs shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-white transition-all active:shadow-none active:translate-x-1 active:translate-y-1"
          >
            ¡Unete al club!
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
