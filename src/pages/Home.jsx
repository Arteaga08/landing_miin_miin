import { useState } from "react";
import { productos } from "../data/products";
import ProductCard from "../components/products/ProductCard";

const Home = () => {
  const [filtro, setFiltro] = useState("todos");

  const filtered = productos.filter((p) =>
    filtro === "todos" ? true : p.categoria === filtro,
  );

  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "piel_seca", nombre: "Piel Seca" },
    { id: "piel_grasa", nombre: "Piel Grasa" },
    { id: "todo_tipo", nombre: "Todo tipo" },
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
        <p className="text-black/50 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em] pt-4">
          Encuentra la rutina perfecta para tu piel
        </p>
      </div>

      {/* FILTROS: Carrusel Horizontal en móvil / Centrado en PC */}
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

        {/* Gradiente sutil para indicar que hay más (Solo móvil) */}
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
          <p className="text-black/40 font-black uppercase tracking-tighter text-2xl">
            Próximamente más productos...
          </p>
        </div>
      )}
    </main>
  );
};

export default Home;
