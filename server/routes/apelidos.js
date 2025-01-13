const express = require("express");
const { ReadApelidos, CreateApelido } = require("../services/apelidos");
const router = express.Router();

router.get("/", async () => {
  const apelidos = await ReadApelidos();

  res.status(200).json(apelidos);
});

router.post("/", async () => {
  const { apelido } = req.body;

  const id = await CreateApelido({ apelido: apelido });

  res.status(200).json({ id: id, message: "Adicionado com sucesso." });
});
