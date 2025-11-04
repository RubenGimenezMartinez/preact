import { h } from "preact";

export default function Home() {
  return (
    <div>
      <h2>Bienvenido a la Home</h2>
      <p>Página principal de la app.</p>
  <a href="/tareas" data-link style={{display: 'inline-block', marginTop: '16px', padding: '8px 16px', background: '#673ab8', color: '#fff', borderRadius: '4px', textDecoration: 'none'}}>Ir a Tareas</a>
    </div>
  );
}
