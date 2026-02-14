import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { productos } from "../data/products";
import { useCart } from "../context/CartContext";
import {
  ArrowLeft,
  ShoppingCart,
  Sparkles,
  BookOpen,
  Check,
  Package,
  Star,
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cart, addToCart } = useCart();

  const producto = productos.find((p) => p.id === parseInt(id));

  // --- FUNCIÓN DE SEGURIDAD (SANATIZE) ---
  // Bloquea cualquier intento de inyectar scripts en lugar de URLs de imagen
  const getSafeUrl = (url) => {
    if (!url) return "";
    const isSafe =
      url.startsWith("http") ||
      url.startsWith("/") ||
      url.startsWith("./") ||
      url.startsWith("blob:");
    return isSafe ? url : "";
  };

  const [imagenPrincipal, setImagenPrincipal] = useState(
    getSafeUrl(producto?.imagenes?.[0]),
  );

  const isAdded = cart.some((item) => item.id === producto?.id);

  useEffect(() => {
    if (producto) {
      setImagenPrincipal(getSafeUrl(producto.imagenes[0]));
    }
  }, [producto, id]);

  const handleAdd = () => {
    if (!isAdded && producto) {
      addToCart(producto);
    }
  };

  if (!producto)
    return (
      <div className="p-10 text-center text-mun-pink font-black text-2xl uppercase italic">
        Producto no encontrado :(
      </div>
    );

  return (
    <main className="p-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-black font-black uppercase text-xs tracking-widest mb-8 hover:text-mun-pink transition-colors group"
      >
        <ArrowLeft
          size={18}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Volver
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* SECCIÓN IZQUIERDA: GALERÍA */}
        <div className="space-y-6">
          <div className="relative w-full aspect-square bg-white border-2 border-black p-4 rounded-[30px] shadow-[8px_8px_0px_0px_#000000] flex items-center justify-center overflow-hidden">
            {imagenPrincipal && (
              <img
                src={imagenPrincipal}
                alt={producto.nombre}
                className="w-full h-full object-contain transition-all duration-300"
              />
            )}

            <div className="absolute bottom-4 right-4 bg-mun-pink text-white border-2 border-black px-5 py-2 rounded-xl font-black text-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10 animate-in zoom-in duration-300">
              ${producto.precio}
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto p-2 scrollbar-hide">
            {producto.imagenes.map((img, index) => (
              <button
                key={index}
                onClick={() => setImagenPrincipal(getSafeUrl(img))}
                className={`shrink-0 w-24 h-24 rounded-2xl border-2 overflow-hidden bg-white transition-all ${
                  imagenPrincipal === getSafeUrl(img)
                    ? "border-mun-pink scale-105 shadow-[4px_4px_0px_0px_#000000]"
                    : "border-black/10 hover:border-black"
                }`}
              >
                <img
                  src={getSafeUrl(img)}
                  alt={`${producto.nombre} ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* SECCIÓN DERECHA: INFO */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-block bg-mun-pink text-white px-4 py-1 rounded-full text-[10px] font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
              {producto.categoria.replace("_", " ")}
            </span>

            {producto.masVendido && (
              <div className="flex items-center gap-1 bg-yellow-300 border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#000000] animate-in zoom-in duration-300">
                <Star size={14} className="fill-black text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  Top Ventas
                </span>
              </div>
            )}
          </div>

          <h1 className="text-4xl font-black text-black uppercase tracking-tighter leading-none italic">
            {producto.nombre}
          </h1>

          <div className="flex items-center gap-3 mt-2">
            <div className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#000000]">
              <span
                className={`w-3 h-3 rounded-full border border-black ${producto.cantidadDisponible > 0 ? "bg-green-400 animate-pulse" : "bg-red-500"}`}
              ></span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {producto.cantidadDisponible > 0 ? "En Stock" : "Agotado"}
              </span>
            </div>

            {producto.cantidadDisponible > 0 && (
              <div className="flex items-center gap-2 bg-mun-pink/10 border-2 border-black px-3 py-1.5 rounded-full shadow-[2px_2px_0px_0px_#000000]">
                <Package size={14} className="text-black" />
                <span className="text-[10px] font-black uppercase tracking-widest text-black">
                  {producto.cantidadDisponible} disponibles
                </span>
              </div>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
              <h3 className="flex items-center gap-2 font-black uppercase text-xs mb-3 text-black tracking-widest">
                <Sparkles size={18} className="text-mun-pink" /> ¿Para qué
                sirve?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                {producto.paraQueSirve}
              </p>
            </div>

            <div className="bg-white p-5 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
              <h3 className="flex items-center gap-2 font-black uppercase text-xs mb-3 text-black tracking-widest">
                <BookOpen size={18} className="text-mun-pink" /> ¿Cómo se usa?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm italic whitespace-pre-line">
                {producto.comoUsar}
              </p>
            </div>
          </div>

          <div className="relative pt-4">
            <button
              onClick={handleAdd}
              disabled={isAdded}
              className={`w-full py-4 rounded-full font-black uppercase text-lg flex items-center justify-center gap-3 transition-all duration-200 border-2 border-black
                ${
                  isAdded
                    ? "bg-gray-100 text-gray-400 shadow-none cursor-default translate-x-1 translate-y-1"
                    : "bg-mun-pink text-white shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 active:scale-95"
                }
              `}
            >
              {isAdded ? (
                <>
                  <Check size={24} strokeWidth={3} /> Ya en el carrito
                </>
              ) : (
                <>
                  <ShoppingCart size={24} />
                  {producto.cantidadDisponible > 0
                    ? "Añadir al Carrito"
                    : "Cotizar Producto"}
                </>
              )}
            </button>
            {producto.cantidadDisponible <= 0 && !isAdded && (
              <p className="text-[10px] font-black uppercase text-center mt-3 text-black/60 tracking-tighter">
                * Producto bajo pedido. Sujeto a disponibilidad.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
