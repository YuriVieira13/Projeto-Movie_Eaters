var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");


router.get("/listar", function (req, res) {
    rankingController.listar(req, res);
});

router.get("/papel/:idUsuario/:idGrupo", function (req, res) {
    rankingController.papel(req, res);
});

module.exports = router;