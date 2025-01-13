const { FindApelidos } = require("../data/apelidos");
const InsertGeneratedNome = require("../data/generater");
const { FindNomes } = require("../data/nomes");

async function ReadGenerate(obj) {
  const apelidos = await FindApelidos();
  const nomes = await FindNomes();

  const nomesIdx = Math.floor(Math.random() * nomes.length);
  const apelidosIdx = Math.floor(Math.random() * apelidos.length);

  const nomeGerado = `${nomes[nomesIdx].nome} ${apelidos[apelidosIdx].apelido}`;

  await InsertGeneratedNome({
    nome: nomeGerado,
    date: new Date().toDateString(),
  });

  return nomeGerado;
}

module.exports = ReadGenerate;
