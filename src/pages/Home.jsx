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
    { id: "piel_acne", nombre: "Tratamiento Para Acné" }, // Acorté el nombre para que los botones fluyan mejor
    { id: "protector_solar", nombre: "Protector Solar" },
  ];

  return (
    <main className="p-6 max-w-7xl mx-auto min-h-screen">
      {/* Título Estilizado: Quitamos el "cherry" y usamos Negro + Rosa */}
      <div className="text-center mb-12 space-y-2">
        <h1 className="text-5xl font-black text-black uppercase tracking-tighter italic">
          Catálago <span className="text-mun-pink italic">Miin Miin</span>
        </h1>
        <p className="text-black/60 font-bold uppercase text-xs tracking-widest">
          Encuentra la rutina perfecta para tu piel
        </p>
      </div>

      {/* Filtros con la nueva paleta Mun-Pink */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFiltro(cat.id)}
            className={`px-6 py-2 rounded-full border-2 border-black font-black uppercase text-[10px] tracking-widest transition-all duration-200 ${
              filtro === cat.id
                ? "bg-mun-pink text-white shadow-none translate-x-1 translate-y-1"
                : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-mun-pink/5"
            }`}
          >
            {cat.nombre}
          </button>
        ))}
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
