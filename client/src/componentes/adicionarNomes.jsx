import { useState } from "react";

export default function AdicionarNomes() {
  const [apelido, setApelido] = useState("");
  const [nome, setNome] = useState("");

  const res = fetch("http://localhost:3030/API/nomes");
  const data = res.json();

  const handlerNomeChange = async (event) => {
    setNome(event.target.value);
  };

  const handlerNomeClick = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/10.3.0",
      },
      body: `{"nome":"${nome}"}`,
    };

    await fetch("http://localhost:3030/API/nomes", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  const handlerApelidoChange = async (event) => {
    setApelido(event.target.value);
  };

  const handlerApelidoClick = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "insomnia/10.3.0",
      },
      body: `{"apelido":"${apelido}"}`,
    };

    await fetch("http://localhost:3030/API/apelidos", options)
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div>
        <h3>Nomes</h3>
        <ul>
            {data.map((e) => (
                <li>{e}</li>
            ))}
        </ul>
        <input
          type="text"
          onChange={(event) => handlerNomeChange(event)}
          value={nome}
        />
        <button onClick={() => handlerNomeClick()}>Salvar</button>
      </div>
      <div>
        <h3>Apelidos</h3>
        <input
          type="text"
          onChange={(event) => handlerApelidoChange(event)}
          value={apelido}
        />
        <button onClick={() => handlerApelidoClick()}>Salvar</button>
      </div>
    </>
  );
}
