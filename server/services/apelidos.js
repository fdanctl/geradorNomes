const { FindApelidos, InsertApelido } = require("../data/apelidos");

async function CreateApelido(obj) {
  return await InsertApelido(obj);
}

async function ReadApelidos() {
  const tarefas = await FindApelidos();
  return tarefas.map((e) => e.apelido);
}

module.exports = { CreateApelido, ReadApelidos };
