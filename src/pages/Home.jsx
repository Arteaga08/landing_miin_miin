import { useState } from "react";
import { productos } from "../data/products"
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
    { id: "piel_acne", nombre: "Tratamientos Para Acné" },
    { id: "protector_solar", nombre: "Protector Solar" },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-black text-center text-mun-cherry mb-8 uppercase italic">
        Miin Miin Catalago
      </h1>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categorias.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFiltro(cat.id)}
            className={`px-6 py-2 rounded-full border-2 border-black font-bold transition-all ${
              filtro === cat.id
                ? "bg-mun-cherry text-white shadow-none"
                : "bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            }`}
          >
            {cat.nombre}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((p) => (
          <ProductCard key={p.id} producto={p} />
        ))}
      </div>
    </main>
  );
};

export default Home;
