const { getMongoCollection } = require("./mongodb");
const col = "nomes-gerados";
const db = "gerador-nomes";

async function InsertGeneratedNome(obj) {
    const collection = await getMongoCollection(db, col);
    await collection.insertOne(obj);
}

module.exports = InsertGeneratedNome;
