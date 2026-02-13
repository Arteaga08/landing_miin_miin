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
    const telefono = "526181473443";

    // Nueva frase de apertura más equilibrada
    const encabezado =
      "¡Hola Miinn Miin! ✨ Me gustaría hacer un pedido par apachar mi piel: 💆🏻‍♀️\n\n";

    const productosStock = cart.filter((item) => item.cantidadDisponible > 0);
    const productosCotizar = cart.filter(
      (item) => item.cantidadDisponible <= 0,
    );

    let cuerpoMensaje = "";

    // Sección de Productos Disponibles
    if (productosStock.length > 0) {
      cuerpoMensaje += "*PRODUCTOS DISPONIBLES*\n";
      cuerpoMensaje += productosStock
        .map((item) => `• ${item.nombre} — *$${item.precio}* ✨`)
        .join("\n");
      cuerpoMensaje += "\n\n";
    }

    // Sección de Notas para Cotizar
    if (productosCotizar.length > 0) {
      cuerpoMensaje += "☁️ *NOTA PARA COTIZAR (SIN STOCK)*\n";
      cuerpoMensaje += productosCotizar
        .map((item) => `• ${item.nombre} — *$${item.precio}* 🧸`)
        .join("\n");
      cuerpoMensaje +=
        "\n_Deseo consultar disponibilidad y tiempo de espera para estos productos._\n\n";
    }

    // Cálculo del Total: SOLO de lo que está en stock
    const totalListo = productosStock.reduce(
      (acc, item) => acc + item.precio,
      0,
    );
    const totalMsg =
      totalListo > 0 ? `🎀 *Total de productos listos:* *$${totalListo}*` : "";


    const mensajeCompleto = encabezado + cuerpoMensaje + totalMsg + despedida;
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
