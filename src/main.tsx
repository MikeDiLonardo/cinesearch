import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import App from "./App.tsx";
import "./index.css";

createRoot(document.querySelector("#root")!).render(
  <StrictMode>
    <ErrorBoundary fallback={<p>An error occured</p>}>
      <App />
    </ErrorBoundary>
  </StrictMode>
)