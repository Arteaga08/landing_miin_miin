import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { productos } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { Star, ChevronLeft, ChevronRight, Plus, Check } from "lucide-react";

const CarouselItem = ({ producto }) => {
  const { cart, addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);
  const isAdded = cart.some((item) => item.id === producto.id);

  const handleAdd = () => {
    if (!isAdded) {
      addToCart(producto);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="min-w-70 max-w-70 md:min-w-75 md:max-w-75 snap-center shrink-0">
      {/* Cambié 'group' por 'card-group' (clase personalizada) 
         para que el hover de una no despierte a las demás. 
      */}
      <div className="card-item bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col h-130">
        {/* Contenedor de Imagen */}
        <Link
          to={`/producto/${producto.id}`}
          className="block relative h-70 bg-white overflow-hidden border-b-2 border-black"
        >
          <img
            src={producto.imagenes?.[0]}
            alt={producto.nombre}
            className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
          />

          {/* ETIQUETA DE CATEGORÍA (La que ya tenías) */}
          <span className="absolute top-3 left-3 bg-white border border-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-mun-pink group-hover:text-white transition-colors">
            {producto.categoria.replace("_", " ")}
          </span>

          {/* NUEVA ETIQUETA: BEST SELLER ✨ */}
          <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-300 border border-black px-2 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform">
            <Star size={10} className="fill-black text-black" />
            <span className="text-[8px] font-black uppercase tracking-tighter">
              Top Ventas
            </span>
          </div>
        </Link>

        {/* Información */}
        <div className="p-5 flex flex-col grow">
          <div className="mb-2 min-h-11">
            <Link to={`/producto/${producto.id}`}>
              <h3 className="font-black text-lg text-black uppercase leading-[1.1] hover:text-mun-pink transition-colors line-clamp-2">
                {producto.nombre}
              </h3>
            </Link>
          </div>

          <div className="min-h-8 mb-6">
            <p className="text-gray-500 text-xs font-medium line-clamp-2 grow italic">
              {producto.descripcionCorta}
            </p>
          </div>

          {/* Botones */}
          <div className="flex gap-2 w-full mt-auto">
            <Link
              to={`/producto/${producto.id}`}
              className="grow flex items-center justify-center text-center bg-white border-2 border-black py-2.5 rounded-full font-black text-[10px] uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 
  
  /* Estado Hover (PC) */
  hover:bg-mun-pink hover:text-white 
  
  /* Estado Active (Móvil y Clic) - Aquí se mantiene la sensación de presión */
  active:bg-mun-pink active:text-white active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
            >
              Ver más
            </Link>

            <div className="relative flex items-center">
              {showToast && (
                <div className="absolute -top-10 right-0 z-50 animate-bounce">
                  <div className="bg-black text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full border-2 border-mun-pink shadow-[3px_3px_0px_0px_#EA8A8A] whitespace-nowrap">
                    ✨ ¡Agregado! ✨
                  </div>
                </div>
              )}
              <button
                onClick={handleAdd}
                disabled={isAdded}
                className={`p-2 rounded-full border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${
                  isAdded
                    ? "bg-gray-100 text-gray-400 cursor-default shadow-none translate-x-px translate-y-px"
                    : "bg-mun-pink text-white hover:bg-black active:shadow-none active:translate-x-px active:translate-y-px"
                }`}
              >
                {isAdded ? (
                  <Check size={20} strokeWidth={3} />
                ) : (
                  <Plus size={20} strokeWidth={3} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BestSellersCarousel = () => {
  const scrollRef = useRef(null);
  const bestSellers = productos.filter((p) => p.masVendido);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    // 'pt-12' asegura que se separe del header del Catálogo
    <section className="relative pt-12 pb-12">
      <div className="flex items-center gap-2 mb-8 px-4 md:px-0">
        <div className="bg-black p-1.5 rounded-lg shadow-[3px_3px_0px_0px_#EA8A8A]">
          <Star className="text-white fill-white" size={20} />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter italic">
          Los Más Vendidos
        </h3>
      </div>

      <div className="relative px-4 md:px-0">
        {/* Flechas */}
        <div className="hidden md:block">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-12 lg:-left-16 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-black p-3 rounded-full hover:scale-110 hover:bg-mun-pink hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-12 lg:-right-16 top-1/2 -translate-y-1/2 z-20 bg-white border-2 border-black p-3 rounded-full hover:scale-110 hover:bg-mun-pink hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 px-2 -mx-2 snap-x scrollbar-thin scrollbar-thumb-[#EA8A8A] scrollbar-track-transparent"
        >
          {bestSellers.map((producto) => (
            <CarouselItem key={producto.id} producto={producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellersCarousel;
