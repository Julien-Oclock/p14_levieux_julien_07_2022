// main.jsx
import React from "react";
import { createRoot } from "react-dom";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/Store.js";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>
);