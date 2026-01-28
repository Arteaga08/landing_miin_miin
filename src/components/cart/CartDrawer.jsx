import { useCart } from "../../context/CartContext";
import { X, Trash2, MessageCircle, AlertCircle } from "lucide-react";

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
            <h2 className="text-2xl font-black uppercase tracking-tighter italic">
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
              <div className="flex flex-col items-center justify-center py-20 opacity-30">
                <ShoppingBag size={48} className="mb-4" />
                <p className="text-center font-black uppercase italic">
                  Tu carrito está vacío
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-2 border-black p-3 rounded-2xl bg-white shadow-[4px_4px_0px_0px_#000000]"
                >
                  <img
                    src={item.imagenes[0]}
                    className="w-20 h-20 object-contain rounded-xl border border-black/5 bg-gray-50"
                    alt={item.nombre}
                  />
                  <div className="flex-1">
                    <h4 className="font-black text-sm uppercase leading-tight">
                      {item.nombre}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-black mt-2 transition-colors flex items-center gap-1 text-[10px] font-bold uppercase"
                    >
                      <Trash2 size={14} /> Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer del Carrito */}
          <div className="p-6 border-t-2 border-black bg-white">
            {/* MENSAJE DE DISPONIBILIDAD (NUEVO) */}
            <div className="bg-yellow-50 border-2 border-black p-3 rounded-xl mb-6 flex gap-3 items-start shadow-[3px_3px_0px_0px_#000000]">
              <AlertCircle size={20} className="text-black shrink-0" />
              <p className="text-[10px] font-bold uppercase leading-tight text-black/80">
                * El stock está sujeto a disponibilidad. Te confirmaremos la
                existencia de tus productos al recibir tu mensaje.
              </p>
            </div>

            <button
              onClick={sendWhatsApp}
              disabled={cart.length === 0}
              className="w-full bg-mun-pink text-white py-4 rounded-full font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000000] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
            >
              <MessageCircle
                size={24}
                fill="currentColor"
                className="text-mun-pink"
              />
              <span className="text-white">Cotizar por WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
