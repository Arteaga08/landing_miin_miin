import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react"; // Añadimos useState
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartDrawer from "./components/cart/CartDrawer"; // Importamos el Drawer

// Estilos globales de Tailwind v4
import "./index.css";
import ScrollToTop from "./components/utils/ScrollToTop";

function App() {
  // Estado para controlar si el carrito está abierto o cerrado
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        {/* Pasamos la función setIsCartOpen al Navbar para que el botón funcione */}
        <div className="min-h-screen bg-mun-bg font-sans selection:bg-mun-pink selection:text-white">
          <Navbar onOpenCart={() => setIsCartOpen(true)} />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>

          {/* Componente del Carrito Deslizable */}
          <CartDrawer
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
