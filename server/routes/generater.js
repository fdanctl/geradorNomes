const express = require("express");
const ReadGenerate = require("../services/generater");

const router = express.Router();

router.get("/", async (req, res) => {
  const nome = await ReadGenerate();

  res.status(200).json(nome);
});

module.exports = router;
