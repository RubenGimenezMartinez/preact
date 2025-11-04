import { h } from "preact";
import { useState } from "preact/hooks";
import { tareas } from "../../index";

export default function Tareas() {
  const [input, setInput] = useState("");

  const addTarea = () => {
    if (input.trim()) {
      tareas.value = [
        ...tareas.value,
        {
          id: Date.now(),
          texto: input,
          completada: false,
        },
      ];
      setInput("");
    }
  };

  const removeTarea = (id) => {
    tareas.value = tareas.value.filter((t) => t.id !== id);
  };

  return (
    <div>
      <h2>Página de Tareas</h2>
      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
          placeholder="Nueva tarea"
          style={{ padding: "8px", width: "200px", marginRight: "8px" }}
        />
        <button onClick={addTarea} style={{ padding: "8px 16px" }}>
          Añadir
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {tareas.value.map((t) => (
          <li key={t.id} style={{ display: "flex", alignItems: "center", marginBottom: "8px", gap: "8px" }}>
            <span style={{ flex: 1 }}>{t.texto}</span>
            <button onClick={() => removeTarea(t.id)} style={{ background: "none", border: "none", color: "red", fontSize: "1.2rem", cursor: "pointer" }}>
              ❌
            </button>
          </li>
        ))}
      </ul>
      <a href="/" data-link style={{display: 'inline-block', marginTop: '16px', padding: '8px 16px', background: '#673ab8', color: '#fff', borderRadius: '4px', textDecoration: 'none'}}>Volver a Home</a>
    </div>
  );
}
