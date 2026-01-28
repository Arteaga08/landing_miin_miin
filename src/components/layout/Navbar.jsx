import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";
import logo from "../../assets/logo.png";

const Navbar = ({ onOpenCart }) => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b-4 border-black sticky top-0 z-50 px-4 md:px-8 py-1">
      {/* Línea de acento superior */}
      <div className="absolute top-0 left-0 w-full h-1.5 bg-mun-pink"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center min-h-17.5">
        {/* COLUMNA 1: MENSAJE (SEOUL -> MEXICO) */}
        <div className="flex justify-start">
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest leading-none italic text-black/50">
            De Seoul <br className="md:hidden" /> Para México
          </span>
        </div>

        {/* COLUMNA 2: LOGO SIEMPRE CENTRADO */}
        <div className="flex justify-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Mün MIIN"
              className="h-20 md:h-20 w-auto object-contain hover:rotate-2 transition-transform duration-300"
            />
          </Link>
        </div>

        {/* COLUMNA 3: CARRITO A LA DERECHA */}
        <div className="flex justify-end">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 md:p-3 group bg-white border-2 border-black rounded-2xl shadow-[3px_3px_0px_0px_#000000] active:shadow-none active:translate-x-0.5 active:translate-y-0.5 transition-all"
          >
            <ShoppingBag className="text-black group-hover:text-mun-pink transition-colors w-5 h-5 md:w-6 md:h-6" />

            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-mun-pink text-white text-[9px] md:text-[10px] font-black rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center border-2 border-black animate-bounce-short">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
