import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Desplazamiento instantáneo al tope de la página
    window.scrollTo(0, 0);
  }, [pathname]); // Se dispara cada vez que cambia la ruta

  return null;
};

export default ScrollToTop;
