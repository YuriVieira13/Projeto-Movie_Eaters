var historicoModel = require("../models/historicoModel");

function listarReview(req, res) {
    var idUsuario = req.params.idUsuario
    var idGrupo = req.params.idGrupo
    historicoModel.listarReview(idUsuario, idGrupo).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function listarFilmes(req, res) {
    var idGrupo = req.params.idGrupo
    historicoModel.listarFilmes(idGrupo).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listarReview,
    listarFilmes
}
