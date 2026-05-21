var sortearModel = require("../models/sortearModel");


function editar(req, res) {
    var idGrupo = req.params.idGrupo;

    sortearModel.resetarPapeis(idGrupo)

        .then(function () {
            return sortearModel.escolherDiretor(idGrupo);

        })

        .then(function () {
            return sortearModel.somarVezesDiretor(idGrupo);
        })

        .then(function (resultado) {
            res.json(resultado);

        })

        .catch(function (erro) {

            console.log(erro);
            res.status(500).json(erro.sqlMessage);

        });

}


module.exports = {
    editar
}