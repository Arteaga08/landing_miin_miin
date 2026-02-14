import { useRef, useState, useEffect, useLayoutEffect } from "react";
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
    // CAMBIO 1: Agregamos 'snap-always' (o scrollSnapStop en style)
    // Esto obliga a que el scroll se detenga SIEMPRE en este elemento, uno por uno.
    <div
      className="min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px] snap-center shrink-0 h-full"
      style={{ scrollSnapStop: "always" }}
    >
      <div className="group h-full bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col">
        <Link
          to={`/producto/${producto.id}`}
          className="block relative aspect-square bg-white overflow-hidden border-b-2 border-black"
        >
          <img
            src={producto.imagenes?.[0]}
            alt={producto.nombre}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
          />

          <div className="absolute bottom-3 right-3 bg-mun-pink text-white border-2 border-black px-3 py-1 rounded-lg font-black text-sm shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
            ${producto.precio}
          </div>

          <span className="absolute top-3 left-3 bg-white border border-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-mun-pink group-hover:text-white transition-colors">
            {producto.categoria.replace("_", " ")}
          </span>

          {producto.masVendido && (
            <div className="absolute top-3 right-3 flex items-center gap-1 bg-yellow-300 border border-black px-2 py-1 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -rotate-3 group-hover:rotate-0 transition-transform z-10">
              <Star size={10} className="fill-black text-black" />
              <span className="text-[8px] font-black uppercase tracking-tighter text-black">
                Top Ventas
              </span>
            </div>
          )}
        </Link>

        <div className="p-5 flex flex-col grow">
          <div className="flex justify-between items-start mb-2">
            <Link to={`/producto/${producto.id}`}>
              <h3 className="font-black text-lg text-black uppercase leading-none hover:text-mun-pink transition-colors line-clamp-2">
                {producto.nombre}
              </h3>
            </Link>
          </div>

          <p className="text-gray-500 text-xs font-medium line-clamp-2 mb-6 grow italic">
            {producto.descripcionCorta}
          </p>

          <div className="flex gap-2 w-full mt-auto">
            <Link
              to={`/producto/${producto.id}`}
              className="grow flex items-center justify-center text-center bg-white border-2 border-black py-2.5 rounded-full font-black text-[10px] uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:bg-mun-pink hover:text-white active:bg-mun-pink active:text-white active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
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
                className={`
                  p-2 rounded-full border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                  ${
                    isAdded
                      ? "bg-gray-100 text-gray-400 cursor-default shadow-none translate-x-px translate-y-px"
                      : "bg-mun-pink text-white hover:bg-black active:shadow-none active:translate-x-px active:translate-y-px"
                  }
                `}
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

  // --- LÓGICA DE MEMORIA CORREGIDA (Sin saltos) ---
  // Usamos useLayoutEffect para que ocurra ANTES de que el usuario vea el cambio
  useLayoutEffect(() => {
    const carousel = scrollRef.current;
    if (carousel) {
      const savedScroll = sessionStorage.getItem("carouselScrollPos");

      if (savedScroll) {
        // 1. Desactivamos temporalmente el scroll suave
        carousel.style.scrollBehavior = "auto";
        // 2. Saltamos INSTANTÁNEAMENTE a la posición
        carousel.scrollLeft = parseInt(savedScroll);

        // 3. Reactivamos el scroll suave para que los botones funcionen bonito después
        // Lo hacemos en un pequeño timeout para asegurar que el navegador ya procesó el salto
        setTimeout(() => {
          carousel.style.scrollBehavior = "smooth";
        }, 50);
      } else {
        // Si no hay nada guardado, aseguramos smooth por defecto
        carousel.style.scrollBehavior = "smooth";
      }

      const handleScroll = () => {
        sessionStorage.setItem("carouselScrollPos", carousel.scrollLeft);
      };

      carousel.addEventListener("scroll", handleScroll);
      return () => carousel.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? 280 + 24 : 320 + 24;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative pt-12 pb-12 overflow-hidden">
      <div className="flex items-center gap-2 mb-8 px-6 max-w-[1400px] mx-auto">
        <div className="bg-black p-1.5 rounded-lg shadow-[3px_3px_0px_0px_#EA8A8A]">
          <Star className="text-white fill-white" size={20} />
        </div>
        <h3 className="text-2xl font-black uppercase tracking-tighter italic">
          Los Más Vendidos
        </h3>
      </div>

      <div className="relative w-full">
        {/* Flechas Desktop */}
        <div className="hidden md:block max-w-[1440px] mx-auto relative h-0">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-[200px] z-20 bg-white border-2 border-black p-3 rounded-full hover:scale-110 hover:bg-mun-pink hover:text-white transition-all shadow-sm"
          >
            <ChevronLeft size={24} strokeWidth={2.5} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-[200px] z-20 bg-white border-2 border-black p-3 rounded-full hover:scale-110 hover:bg-mun-pink hover:text-white transition-all shadow-sm"
          >
            <ChevronRight size={24} strokeWidth={2.5} />
          </button>
        </div>

        {/* CAMBIO 2: snap-mandatory + control de CSS */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-10 px-6 snap-x snap-mandatory scrollbar-hide"
          // 'scrollBehavior' se maneja dinámicamente en el useLayoutEffect
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
