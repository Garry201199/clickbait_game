import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SnackbarProvider } from "notistack";
import "./index.css";
import App from "./App";
import { CounterContextProvider } from "./Context/CounterContext";
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <SnackbarProvider
        preventDuplicate
        autoHideDuration={2000}
        maxSnack={3}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
      >
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </SnackbarProvider>{" "}
    </BrowserRouter>
  </StrictMode>
);
