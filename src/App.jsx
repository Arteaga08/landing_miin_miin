import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";

// Estilos globales de Tailwind v4
import "./index.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-mun-pink-bg font-sans selection:bg-mun-coral selection:text-white">
          <Navbar />
          <Routes>
            {/* Página principal con filtros */}
            <Route path="/" element={<Home />} />

            {/* Página individual de producto */}
            <Route path="/producto/:id" element={<ProductDetail />} />
          </Routes>

          {/* Aquí podrías agregar un Footer después */}
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
