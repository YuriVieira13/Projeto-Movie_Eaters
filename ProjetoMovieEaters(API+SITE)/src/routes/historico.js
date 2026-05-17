var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /filmes/cadastrar
    historicoController.cadastrar(req, res);
});

router.get("/listarFilmes/:idUsuario/:idGrupo",  function (req, res) {
    historicoController.listarFilmes(req, res);
});

router.delete("/deletar/:idhistorico", function (req, res) {
    historicoController.deletar(req, res);
});

router.post("/curtir",  function (req, res) {
    historicoController.curtir(req, res);
});


module.exports = router;