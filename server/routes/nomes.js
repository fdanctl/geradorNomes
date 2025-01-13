const express = require("express");
const { ReadNomes, CreateNome } = require("../services/nomes");

const router = express.Router();

router.get("/", async () => {
  const nomes = await ReadNomes();

  res.status(200).json(nomes);
});

router.post("/", async () => {
  const { nome } = req.body;

  const id = await CreateNome({ nome: nome });

  res.status(200).json({ id: id, message: "Adicionado com sucesso." });
});
