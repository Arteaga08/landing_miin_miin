import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Guardar en LocalStorage para no perder el carrito al recargar
  useEffect(() => {
    const savedCart = localStorage.getItem("mun_cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("mun_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const sendWhatsApp = () => {
    const phone = "521234567890"; // Reemplaza con tu número real
    const items = cart.map((i) => `- ${i.quantity}x ${i.nombre}`).join("%0A");
    //const total = cart.reduce((acc, i) => acc + i.precio * i.quantity, 0);
    const message = `Hola Mün MIIN! ✨%0AQuisiera pedir los siguientes productos:%0A${items}%0A%0ATotal: $${total.toFixed(2)}`;

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, sendWhatsApp }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
