const { InsertNome, FindNomes } = require("../data/nomes");

async function CreateNome(obj) {
  return await InsertNome(obj);
}

async function ReadNomes() {
  const tarefas = await FindNomes();
  return tarefas.map((e) => e.nome);
}

module.exports = { CreateNome, ReadNomes };
