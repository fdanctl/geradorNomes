import { useState } from "react";

const getNomes = async () => {
  const res = await fetch("http://localhost:3030/API/nomes");
  const data = await res.json();
  console.log(data);
  return data;
};

const getApelidos = async () => {
  const res = await fetch("http://localhost:3030/API/apelidos");
  const data = await res.json();
  console.log(data);
  return data;
};
export default function AdicionarNomes() {
  const [apelido, setApelido] = useState("");
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);
  const [apelidos, setApelidos] = useState([]);

  async function DoApelidos() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch("http://localhost:3030/API/apelidos", options);
    const json = await res.json();
    console.log(json);
    await setApelidos(json);
  }

  async function DoNomes() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch("http://localhost:3030/API/nomes", options);
    const json = await res.json();
    console.log(json);
    await setNomes(json);
  }

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
          {nomes.map((e) => (
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
        <ul>
          {apelidos.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
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
