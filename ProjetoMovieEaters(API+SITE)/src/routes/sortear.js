var express = require("express");
var router = express.Router();

var sortearController = require("../controllers/sortearController");

router.put("/editar/:idGrupo", function (req, res) {
    sortearController.editar(req, res);
});


module.exports = router;