import React, { useState } from "react";
import "./button.css";

export default function Button() {
  const [nomes, setNomes] = useState("");

  const handlerBtn = async () => {
    const res = await fetch("http://localhost:3030/API/generater");
    const data = await res.json();
    setNomes(data);
  };

  return (
    <>
      <div className="container">
        <h1>Gerador de Nomes</h1>
        <h2>{nomes}</h2>
        <button onClick={async () => await handlerBtn()}>Gerar Nomes</button>
      </div>
    </>
  );
}
