import { useCart } from "../../context/CartContext";
import { X, Trash2, MessageCircle } from "lucide-react";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, sendWhatsApp } = useCart();
  const total = cart.reduce(
    (acc, item) => acc + item.precio * item.quantity,
    0,
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 overflow-hidden">
      {/* Overlay oscuro */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white border-l-4 border-black flex flex-col">
          {/* Header */}
          <div className="p-6 border-b-2 border-black flex justify-between items-center bg-mun-pink/10">
            <h2 className="text-2xl font-black uppercase tracking-tighter">
              Tu Carrito
            </h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-black/5 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Lista de productos */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 font-bold py-10 uppercase">
                Tu carrito está vacío
              </p>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-2 border-black p-3 rounded-2xl bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <img
                    src={item.imagenes[0]}
                    className="w-20 h-20 object-cover rounded-xl border border-black/10"
                    alt={item.nombre}
                  />
                  <div className="flex-1">
                    <h4 className="font-black text-sm uppercase leading-tight">
                      {item.nombre}
                    </h4>
                    <p className="text-mun-pink font-bold">
                      ${item.precio} x {item.quantity}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-600 mt-2 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer del Carrito */}
          <div className="p-6 border-t-2 border-black bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg uppercase">Total:</span>
              <span className="font-black text-2xl text-mun-pink">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={sendWhatsApp}
              disabled={cart.length === 0}
              className="w-full bg-mun-pink text-white py-4 rounded-full font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MessageCircle size={24} /> Pedir por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
