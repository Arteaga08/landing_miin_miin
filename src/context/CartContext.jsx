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
    const telefono = "526181473443"; // Reemplaza con tu número

    const encabezado =
      "¡Hola Miinn Miin! ✨ Me gustaría cotizar la disponibilidad de estos productos:\n\n";

    // Solo enviamos nombre y cantidad
    const listaProductos = cart
      .map((item) => {
        return `- ${item.nombre} (Cantidad: ${item.quantity})`;
      })
      .join("\n");

    const despedida = `\n\n¿Me podrían confirmar si los tienen disponibles y su precio actual? 😊`;

    const mensajeCompleto = encabezado + listaProductos + despedida;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensajeCompleto)}`;

    window.open(url, "_blank");
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
