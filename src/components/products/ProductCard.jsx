import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { Plus } from "lucide-react";

const ProductCard = ({ producto }) => {
  const { addToCart } = useCart();

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
        {/* Etiqueta de Categoría - Ahora con acento en Mun-Pink */}
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
        <div className="flex gap-2">
          <Link
            to={`/producto/${producto.id}`}
            className="grow text-center bg-white border-2 border-black py-2 rounded-full font-black text-[10px] uppercase hover:bg-mun-pink hover:text-white transition-all"
          >
            Ver más
          </Link>

          <button
            onClick={() => addToCart(producto)}
            className="bg-mun-pink border-2 border-black p-2 rounded-full text-white hover:bg-black transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-px active:translate-y-px"
            title="Añadir al carrito"
          >
            <Plus size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
