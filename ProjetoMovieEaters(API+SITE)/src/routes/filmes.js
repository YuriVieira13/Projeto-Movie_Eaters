var express = require("express");
var router = express.Router();

var filmeController = require("../controllers/filmeController");

router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /filmes/cadastrar
    filmeController.cadastrar(req, res);
});

router.get("/listar", function (req, res) {
    // função a ser chamada quando acessar /filmes/listar
    filmeController.listar(req, res);
});

module.exports = router;