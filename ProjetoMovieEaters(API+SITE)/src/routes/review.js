var express = require("express");
var router = express.Router();

var reviewController = require("../controllers/reviewController");


router.post("/cadastrar", function (req, res) {
    // função a ser chamada quando acessar /filmes/cadastrar
    reviewController.cadastrar(req, res);
});

router.get("/listar/:idFilme",  function (req, res) {
    // função a ser chamada quando acessar /filmes/listar
    reviewController.listar(req, res);
});

router.delete("/deletar/:idReview", function (req, res) {
    reviewController.deletar(req, res);
});

router.post("/curtir",  function (req, res) {
    reviewController.curtir(req, res);
});


module.exports = router;