const express = require("express");
const { ReadNomes, CreateNome } = require("../services/nomes");

const router = express.Router();

router.get("/", async (req, res) => {
  const nomes = await ReadNomes();

  res.status(200).json(nomes);
});

router.post("/", async (req, res) => {
  const { nome } = req.body;

  if (typeof nome !== "string") {
    return res.status(400).json({message: "Insere uma string"})
  }

  const id = await CreateNome({ nome: nome });

  res.status(200).json({ id: id, message: "Adicionado com sucesso." });
});

module.exports = router;
