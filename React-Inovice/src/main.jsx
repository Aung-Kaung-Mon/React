import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider from "./contexts/ContextProvider";

ReactDOM.createRoot(document.querySelector("#root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
