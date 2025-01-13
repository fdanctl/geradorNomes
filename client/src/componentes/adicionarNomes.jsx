import { useEffect, useState } from "react";

export default function AdicionarNomes() {
  const [apelido, setApelido] = useState("");
  const [nome, setNome] = useState("");
  const [nomes, setNomes] = useState([]);
  const [apelidos, setApelidos] = useState([]);

  useEffect(() => {
    const fetchNomes = async () => {
      const ap = await DoApelidos();
      const nom = await DoNomes();
      setApelidos(ap | []);
      setNomes(nom | []);
    };
    fetchNomes();
  }, []);

  async function DoApelidos() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch("http://localhost:3030/API/apelidos", options);
    const json = await res.json();
    console.log(json);
    return json;
  }

  async function DoNomes() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    const res = await fetch("http://localhost:3030/API/nomes", options);
    const json = await res.json();
    return json;
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

    const nom = await DoNomes();
    setNomes(nom | []);
    setNome("");
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

    const ap = await DoApelidos();
    setApelidos(ap | []);
    setApelido("");
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
