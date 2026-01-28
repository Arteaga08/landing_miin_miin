import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white border-b-2 border-black sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
      <Link
        to="/"
        className="text-2xl font-black text-mun-cherry tracking-tighter"
      >
        Miin Miin
      </Link>

      <div className="relative cursor-pointer hover:scale-110 transition-transform">
        <ShoppingBag className="text-mun-cherry" size={28} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-mun-coral text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center border border-black">
            {totalItems}
          </span>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
