const express = require("express");
const { ReadApelidos, CreateApelido } = require("../services/apelidos");
const router = express.Router();

router.get("/", async (req, res) => {
  const apelidos = await ReadApelidos();

  res.status(200).json(apelidos);
});

router.post("/", async (req, res) => {
  const { apelido } = req.body;

  if (typeof apelido !== "string") {
    return res.status(400).json({ message: "Insere uma string" });
  }

  const id = await CreateApelido({ apelido: apelido });

  res.status(200).json({ id: id, message: "Adicionado com sucesso." });
});

module.exports = router;
