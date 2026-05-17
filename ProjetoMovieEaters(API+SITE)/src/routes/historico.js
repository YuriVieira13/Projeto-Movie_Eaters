var express = require("express");
var router = express.Router();

var historicoController = require("../controllers/historicoController");


router.get("/listarReview/:idUsuario/:idGrupo",  function (req, res) {
    historicoController.listarReview(req, res);
});

router.get("/listarFilmes/:idGrupo",  function (req, res) {
    historicoController.listarFilmes(req, res);
});


module.exports = router;