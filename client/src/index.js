import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import App from "./App";
import AdicionarNomes from "./componentes/adicionarNomes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/adicionar-nomes" element={<AdicionarNomes />} />
    </Routes>
  </BrowserRouter>
);
