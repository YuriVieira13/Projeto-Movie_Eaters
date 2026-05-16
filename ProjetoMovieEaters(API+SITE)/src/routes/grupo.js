var express = require("express");
var router = express.Router();

var grupoController = require("../controllers/grupoController");

router.post("/cadastrar", function (req, res) {
    grupoController.cadastrar(req, res);
});

router.post("/entrar", function (req, res) {
    grupoController.entrar(req, res);
});
router.get("/listar/:codigo", function (req, res) {
    grupoController.listar(req, res);
});
router.get("/listarGrupos/:idUsuario", function (req, res) {
    grupoController.listarGrupos(req, res);
});

module.exports = router;