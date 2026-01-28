import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { productos } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart, Sparkles, BookOpen } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const producto = productos.find((p) => p.id === parseInt(id));

  const [imagenPrincipal, setImagenPrincipal] = useState(
    producto?.imagenes?.[0],
  );

  useEffect(() => {
    if (producto) setImagenPrincipal(producto.imagenes[0]);
  }, [producto]);

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
        Volver al catálogo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* SECCIÓN IZQUIERDA: GALERÍA */}
        <div className="space-y-6">
          {/* CONTENEDOR PRINCIPAL: Forzamos un cuadrado perfecto que no cambia */}
          <div className="relative w-full aspect-square bg-white border-2 border-black p-4 rounded-[30px] shadow-[8px_8px_0px_0px_#000000] flex items-center justify-center overflow-hidden">
            <img
              src={imagenPrincipal}
              alt={producto.nombre}
              /* object-contain evita que la imagen se deforme o se corte */
              className="w-full h-full object-contain transition-all duration-300"
            />
          </div>

          {/* MINIATURAS: Forzamos tamaño fijo y recorte uniforme */}
          <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide">
            {producto.imagenes.map((img, index) => (
              <button
                key={index}
                onClick={() => setImagenPrincipal(img)}
                /* w-24 h-24 fija el tamaño exacto. aspect-square asegura la forma */
                className={`shrink-0 w-24 h-24 aspect-square rounded-2xl border-2 overflow-hidden bg-white transition-all ${
                  imagenPrincipal === img
                    ? "border-mun-pink scale-105 shadow-[4px_4px_0px_0px_#000000]"
                    : "border-black/10 hover:border-black"
                }`}
              >
                <img
                  src={img}
                  alt={`${producto.nombre} ${index}`}
                  /* object-cover hace que la miniatura SIEMPRE rellene el cuadrito */
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* SECCIÓN DERECHA: INFO */}
        <div className="space-y-6">
          <span className="inline-block bg-mun-pink text-white px-4 py-1 rounded-full text-[10px] font-black uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000000]">
            {producto.categoria.replace("_", " ")}
          </span>

          <h1 className="text-4xl font-black text-black uppercase tracking-tighter leading-none italic">
            {producto.nombre}
          </h1>

          <div className="flex items-center gap-4 mt-2">
            <div className="flex items-center gap-2 bg-white border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_0px_#000000]">
              <span
                className={`w-3 h-3 rounded-full border border-black ${producto.stock ? "bg-green-400 animate-pulse" : "bg-red-500"}`}
              ></span>
              <span className="text-[10px] font-black uppercase tracking-widest">
                {producto.stock ? "En Stock" : "Agotado"}
              </span>
            </div>

            {producto.stock && (
              <span className="text-[10px] font-bold text-black/50 uppercase tracking-widest">
                {producto.cantidadDisponible} unidades disponibles
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div className="bg-white p-5 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_#000000]">
              <h3 className="flex items-center gap-2 font-black uppercase text-xs mb-3 text-black tracking-widest">
                <Sparkles size={18} className="text-mun-pink" /> ¿Para qué
                sirve?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
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

          <button
            onClick={() => addToCart(producto)}
            className="w-full bg-mun-pink text-white py-4 rounded-full font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <ShoppingCart size={24} /> Cotizar Producto
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
