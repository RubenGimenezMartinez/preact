import { hydrate, prerender as ssr } from "preact-iso";

import preactLogo from "./assets/preact.svg";
import "./style.css";

export function App() {
  return (
    <div>
      <h1>Hola mundo desde Preact!</h1>
      <img src={preactLogo} class="logo" alt="Preact Logo" />
    </div>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
