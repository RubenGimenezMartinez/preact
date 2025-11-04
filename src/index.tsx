import { hydrate, prerender as ssr } from "preact-iso";

import preactLogo from "./assets/preact.svg";
import "./style.css";

import { signal } from "@preact/signals";

const counter = signal(10);

export function App() {
  const increase = () => {
    counter.value++;
  };
  const decrease = () => {
    counter.value--;
  };

  return (
    <div>
      <div>
        <h1>Hola mundo desde Preact!</h1>
        <span>Contador: {counter.value}</span>
      </div>
      <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
        <button
          style={{ width: "30px", fontSize: "1.5rem" }}
          onClick={increase}
        >
          +
        </button>
        <button
          style={{ width: "30px", fontSize: "1.5rem" }}
          onClick={decrease}
        >
          -
        </button>
      </div>
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
