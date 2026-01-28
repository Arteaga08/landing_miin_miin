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
        className="block relative aspect-square bg-mun-pink-bg/30 overflow-hidden border-b-2 border-black"
      >
        <img
          /* CAMBIO AQUÍ: Usamos producto.imagenes[0] en lugar de producto.imagen */
          src={producto.imagenes?.[0]}
          alt={producto.nombre}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Etiqueta de Categoría */}
        <span className="absolute top-3 left-3 bg-white border border-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {producto.categoria.replace("_", " ")}
        </span>
      </Link>

      {/* Información */}
      <div className="p-5 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/producto/${producto.id}`}>
            <h3 className="font-black text-xl text-black uppercase leading-tight hover:text-mun-cherry transition-colors">
              {producto.nombre}
            </h3>
          </Link>
        </div>

        <p className="text-gray-600 text-sm line-clamp-2 mb-6 grow">
          {producto.descripcionCorta}
        </p>

        {/* Botones */}
        <div className="flex gap-2">
          <Link
            to={`/producto/${producto.id}`}
            className="grow text-center bg-white border-2 border-black py-2 rounded-full font-bold text-xs uppercase hover:bg-gray-50 transition-colors"
          >
            Detalles
          </Link>

          <button
            onClick={() => addToCart(producto)}
            className="bg-mun-coral border-2 border-black p-2 rounded-full text-white hover:bg-mun-cherry transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-px active:translate-y-px"
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
