var express = require("express");
var router = express.Router();
const upload = require('../config/configUpload'); // ARQUIVO COM A CONFIGURAÇÃO DO UPLOAD
var filmeController = require("../controllers/filmeController");


// upload.single('poster') vai buscar no no FormData algum file do campo poster
router.post("/cadastrar", upload.single('poster'), function (req, res) {
    // função a ser chamada quando acessar /filmes/cadastrar
    filmeController.cadastrar(req, res);
});

router.get("/listar",  function (req, res) {
    // função a ser chamada quando acessar /filmes/listar
    filmeController.listar(req, res);
});

module.exports = router;