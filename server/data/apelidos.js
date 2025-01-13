const { getMongoCollection } = require("./mongodb");
const col = "apelidos";
const db = "gerador-nomes";

async function InsertApelido(obj) {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

async function FindApelidos() {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({}).toArray();

  return result;
}

module.exports = { InsertApelido, FindApelidos };
