import { useState } from "react";
import { productos } from "../data/products";
import ProductCard from "../components/products/ProductCard";
import { Search, X } from "lucide-react"; // Importamos iconos

const Home = () => {
  const [filtro, setFiltro] = useState("todos");
  const [busqueda, setBusqueda] = useState(""); // Nuevo estado para el buscador

  // Lógica de filtrado combinada (Categoría + Nombre)
  const filtered = productos.filter((p) => {
    const cumpleFiltro = filtro === "todos" ? true : p.categoria === filtro;
    const cumpleBusqueda = p.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());
    return cumpleFiltro && cumpleBusqueda;
  });

  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "piel_seca", nombre: "Piel Seca" },
    { id: "piel_grasa", nombre: "Piel Grasa" },
    { id: "todo_tipo", nombre: "Todo tipo" },
    { id: "piel_sensible", nombre: "Sensible" },
    { id: "piel_acne", nombre: "Tratamiento para Acné" },
    { id: "protector_solar", nombre: "Protector Solar" },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto min-h-screen">
      {/* Header del Catálogo */}
      <div className="text-center mb-10 space-y-1">
        <h1 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter italic leading-none">
          Catálogo
        </h1>
        <h2 className="text-4xl md:text-6xl font-black text-mun-pink uppercase tracking-tighter italic leading-none">
          Miin Miin
        </h2>
      </div>

      {/* BUSCADOR ESTILIZADO */}
      <div className="max-w-md mx-auto mb-8 relative">
        <div className="relative group">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-black/30 group-focus-within:text-mun-pink transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="BUSCAR PRODUCTO..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="w-full bg-white border-2 border-black py-4 pl-12 pr-12 rounded-full font-black uppercase text-[10px] tracking-[0.2em] shadow-[4px_4px_0px_0px_#000000] focus:outline-none focus:shadow-none focus:translate-x-1 focus:translate-y-1 transition-all placeholder:text-black/20"
          />
          {busqueda && (
            <button
              onClick={() => setBusqueda("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-black/40 hover:text-black"
            >
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* FILTROS: Carrusel Horizontal */}
      <div className="relative mb-16">
        <div className="flex overflow-x-auto md:justify-center gap-3 pb-6 px-2 scrollbar-hide snap-x">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFiltro(cat.id)}
              className={`shrink-0 snap-center px-6 py-2 rounded-full border-2 border-black font-black uppercase text-[10px] tracking-widest transition-all duration-200 ${
                filtro === cat.id
                  ? "bg-mun-pink text-white shadow-none translate-x-1 translate-y-1"
                  : "bg-white text-black shadow-[4px_4px_0px_0px_#000000] hover:bg-mun-pink/5"
              }`}
            >
              {cat.nombre}
            </button>
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-12 bg-linear-to-l from-white to-transparent pointer-events-none md:hidden"></div>
      </div>

      {/* Grid de Productos */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border-4 border-dashed border-black/10 rounded-3xl">
          <p className="text-black/40 font-black uppercase tracking-tighter text-xl">
            No encontramos lo que buscas...
          </p>
          <button
            onClick={() => {
              setBusqueda("");
              setFiltro("todos");
            }}
            className="mt-4 text-mun-pink font-black uppercase text-xs underline"
          >
            Limpiar filtros
          </button>
        </div>
      )}
    </main>
  );
};

export default Home;
