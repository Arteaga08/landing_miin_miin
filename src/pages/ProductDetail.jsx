import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { productos } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingCart, Sparkles, BookOpen } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // Buscamos el producto por ID
  const producto = productos.find((p) => p.id === parseInt(id));

  // Estado para la imagen que se muestra en grande
  // Inicializamos con la primera imagen del arreglo
  const [imagenPrincipal, setImagenPrincipal] = useState(
    producto?.imagenes?.[0],
  );

  // Si el producto cambia (por navegación), actualizamos la imagen principal
  useEffect(() => {
    if (producto) setImagenPrincipal(producto.imagenes[0]);
  }, [producto]);

  if (!producto)
    return (
      <div className="p-10 text-center text-mun-cherry font-bold text-2xl uppercase">
        Producto no encontrado :(
      </div>
    );

  return (
    <main className="p-6 max-w-5xl mx-auto animate-in fade-in duration-500">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-mun-cherry font-bold mb-8 hover:underline group"
      >
        <ArrowLeft
          size={20}
          className="group-hover:-translate-x-1 transition-transform"
        />
        Volver al catálogo
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* SECCIÓN IZQUIERDA: GALERÍA */}
        <div className="space-y-4">
          {/* Contenedor Imagen Grande */}
          <div className="bg-white border-2 border-black p-4 rounded-[30px] shadow-[8px_8px_0px_0px_rgba(168,40,45,1)]">
            <img
              src={imagenPrincipal}
              alt={producto.nombre}
              className="w-full h-100 md:h-125 rounded-[20px] object-contain transition-all duration-300"
            />
          </div>

          {/* Miniaturas (Thumbnails) */}
          <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide">
            {producto.imagenes.map((img, index) => (
              <button
                key={index}
                onClick={() => setImagenPrincipal(img)}
                className={`shrink-0 w-20 h-20 rounded-xl border-2 overflow-hidden bg-white transition-all ${
                  imagenPrincipal === img
                    ? "border-mun-cherry scale-105 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                    : "border-black/10 hover:border-black"
                }`}
              >
                <img
                  src={img}
                  alt={`${producto.nombre} ${index}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* SECCIÓN DERECHA: INFO */}
        <div className="space-y-6">
          <span className="inline-block bg-mun-coral/20 text-mun-cherry px-4 py-1 rounded-full text-xs font-bold uppercase border border-mun-cherry">
            {producto.categoria.replace("_", " ")}
          </span>

          <h1 className="text-4xl font-black text-black uppercase tracking-tight leading-none">
            {producto.nombre}
          </h1>

        

          <div className="space-y-4">
            <div className="bg-white p-5 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <h3 className="flex items-center gap-2 font-black uppercase text-sm mb-2 text-black">
                <Sparkles size={18} className="text-mun-coral" /> ¿Para qué
                sirve?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm ">
                {producto.paraQueSirve}
              </p>
            </div>

            <div className="bg-white p-5 border-2 border-black rounded-2xl shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
              <h3 className="flex items-center gap-2 font-black uppercase text-sm mb-2 text-black">
                <BookOpen size={18} className="text-mun-coral" /> ¿Cómo se usa?
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm italic whitespace-pre-line">
                {producto.comoUsar}
              </p>
            </div>
          </div>

          <button
            onClick={() => addToCart(producto)}
            className="w-full bg-mun-cherry text-white py-4 rounded-full font-black uppercase text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 active:scale-95"
          >
            <ShoppingCart size={24} /> Añadir al carrito
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
