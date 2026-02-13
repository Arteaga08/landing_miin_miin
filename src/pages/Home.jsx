import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { productos } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import BestSellersCarousel from "../components/home/BestSellersCarousel";
import { Search, X, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [busqueda, setBusqueda] = useState("");

  const categoriaUrl = searchParams.get("categoria") || "todos";
  const [filtro, setFiltro] = useState(categoriaUrl);

  useEffect(() => {
    setFiltro(categoriaUrl);
  }, [categoriaUrl]);

  const handleFiltro = (id) => {
    setFiltro(id);
    if (id === "todos") setSearchParams({});
    else setSearchParams({ categoria: id });
  };

  const filtered = productos.filter((p) => {
    const cumpleFiltro =
      filtro === "todos"
        ? true
        : p.categoria === filtro || p.categorias?.includes(filtro);
    const cumpleBusqueda = p.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return cumpleFiltro && cumpleBusqueda;
  });

  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "todo_tipo", nombre: "Todo tipo" },
    { id: "piel_seca", nombre: "Piel Seca" },
    { id: "piel_grasa", nombre: "Piel Grasa" },
    { id: "piel_sensible", nombre: "Piel Sensible" },
    { id: "piel_acne", nombre: "Tratamiento para Acné" },
    { id: "protector_solar", nombre: "Protector Solar" },
    { id: "maquillaje", nombre: "Maquillaje" },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-10 space-y-1">
        <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter italic leading-none">
          {" "}
          Catálogo{" "}
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-mun-pink uppercase tracking-tighter italic leading-none">
          {" "}
          Miin Miin{" "}
        </h2>
      </div>

      {/* SECCIÓN BEST SELLERS */}
      <BestSellersCarousel />

      {/* SEPARADOR ESTILIZADO */}
      <div className="relative py-16 flex items-center justify-center">
        <div className="absolute w-full h-0.5 bg-black/10"></div>
        <div className="relative bg-white border-2 border-#EA8A8A px-6 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-black/40">
          K-Beauty
        </div>
      </div>

      {/* TÍTULO NUESTROS PRODUCTOS */}
      <div className="text-center mb-10 space-y-1">
        <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter italic leading-none">
          {" "}
          Nuestros{" "}
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-mun-pink uppercase tracking-tighter italic leading-none">
          {" "}
          Productos{" "}
        </h2>
      </div>

      {/* BUSCADOR */}
      <div className="max-w-md mx-auto mb-10 relative">
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-mun-pink"
            size={20}
          />
          <input
            type="text"
            placeholder="BUSCAR PRODUCTO..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white border-2 border-black py-4 pl-12 pr-12 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:shadow-none transition-all"
          />
        </div>
      </div>

      {/* FILTROS Y GRID (Sin cambios) */}
      <div className="relative mb-16">
        <div className="flex overflow-x-auto md:justify-center gap-3 pb-6 px-2 scrollbar-hide">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleFiltro(cat.id)}
              className={`shrink-0 px-6 py-2 rounded-full border-2 border-black font-black uppercase text-[10px] tracking-widest transition-all ${filtro === cat.id ? "bg-mun-pink text-white shadow-none translate-x-1 translate-y-1" : "bg-white text-black shadow-[4px_4px_0px_0px_#000000] hover:bg-mun-pink/5"}`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-4 border-dashed border-black/10 rounded-3xl">
          <p className="text-black/40 font-black uppercase tracking-tighter text-xl">
            {" "}
            No encontramos lo que buscas...{" "}
          </p>
          <button
            onClick={() => handleFiltro("todos")}
            className="mt-4 text-mun-pink font-black uppercase text-xs underline"
          >
            {" "}
            Limpiar filtros{" "}
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
