import {
  hydrate,
  prerender as ssr,
  Router,
  Route,
  LocationProvider,
} from "preact-iso";

import preactLogo from "./assets/preact.svg";
import "./style.css";

import Home from "./pages/Home.jsx";
import Tareas from "./pages/tareas/index.jsx";
import { signal } from "@preact/signals";
// Estado global de tareas
export const tareas = signal([
  { id: 1, texto: "Aprender Preact", completada: false },
  { id: 2, texto: "Crear rutas", completada: true },
]);

export function App() {
  return (
    <LocationProvider>
      <div>
        <nav
          style={{
            display: "flex",
            gap: "16px",
            marginBottom: "24px",
            justifyContent: "center",
          }}
        >
          <a href="/" data-link>
            Home
          </a>
          <a href="/tareas" data-link>
            Tareas
          </a>
        </nav>
        <Router>
          <Route path="/" component={Home} />
          <Route path="/tareas" component={Tareas} />
        </Router>
      </div>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
