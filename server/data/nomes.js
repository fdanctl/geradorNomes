const { getMongoCollection } = require("./mongodb");
const col = "gerador-nomes";
const db = "nomes";

async function InsertNome(obj) {
  const collection = await getMongoCollection(db, col);
  const result = await collection.insertOne(obj);
  return result.insertedId;
}

async function FindNomes() {
  const collection = await getMongoCollection(db, col);
  const result = await collection.find({}).toArray();

  return result;
}

module.exports = { InsertNome, FindNomes };
