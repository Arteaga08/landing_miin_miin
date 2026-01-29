import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Plus, Check } from "lucide-react"; // Importamos Check

const ProductCard = ({ producto }) => {
  // Traemos el carrito para verificar si el producto ya existe
  const { cart, addToCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  // LÓGICA: ¿Este producto ya está en la lista?
  const isAdded = cart.some((item) => item.id === producto.id);

  const handleAdd = () => {
    if (!isAdded) {
      addToCart(producto);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    }
  };

  return (
    <div className="group bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex flex-col">
      {/* Contenedor de Imagen */}
      <Link
        to={`/producto/${producto.id}`}
        className="block relative aspect-square bg-white overflow-hidden border-b-2 border-black"
      >
        <img
          src={producto.imagenes?.[0]}
          alt={producto.nombre}
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-white border border-black px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-tighter shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:bg-mun-pink group-hover:text-white transition-colors">
          {producto.categoria.replace("_", " ")}
        </span>
      </Link>

      {/* Información */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/producto/${producto.id}`}>
            <h3 className="font-black text-lg text-black uppercase leading-none hover:text-mun-pink transition-colors">
              {producto.nombre}
            </h3>
          </Link>
        </div>

        <p className="text-gray-500 text-xs font-medium line-clamp-2 mb-6 grow italic">
          {producto.descripcionCorta}
        </p>

        {/* Botones */}
        <div className="flex gap-2 w-full mt-auto">
          <Link
            to={`/producto/${producto.id}`}
            className="grow flex items-center justify-center text-center bg-white border-2 border-black py-2.5 rounded-full font-black text-[10px] uppercase transition-all duration-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-mun-pink hover:text-white active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
          >
            Ver más
          </Link>

          <div className="relative flex items-center">
            {/* NOTIFICACIÓN TIPO "TOAST" POP */}
            {showToast && (
              <div className="absolute -top-10 right-0 z-50 animate-bounce">
                <div className="bg-black text-white text-[9px] font-black uppercase px-3 py-1.5 rounded-full border-2 border-mun-pink shadow-[3px_3px_0px_0px_#EA8A8A] whitespace-nowrap">
                  ✨ ¡Agregado! ✨
                </div>
              </div>
            )}

            {/* BOTÓN DINÁMICO */}
            <button
              onClick={handleAdd}
              disabled={isAdded} // Se deshabilita si ya fue agregado
              className={`
                p-2 rounded-full border-2 border-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] 
                ${
                  isAdded
                    ? "bg-gray-100 text-gray-400 cursor-default shadow-none translate-x-px translate-y-px"
                    : "bg-mun-pink text-white hover:bg-black active:shadow-none active:translate-x-px active:translate-y-px"
                }
              `}
              title={isAdded ? "Ya en el carrito" : "Añadir al carrito"}
            >
              {/* Cambiamos el icono según el estado */}
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
  );
};

export default ProductCard;
