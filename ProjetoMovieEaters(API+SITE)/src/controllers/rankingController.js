var rankingModel = require("../models/rankingModel");

function listar(req, res) { // função para trazer os dados do gráfico 1
    var idGrupo = req.params.idGrupo
    rankingModel.listar(idGrupo).then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}


function papel(req, res) {
    var idUsuario = req.params.idUsuario
    var idGrupo = req.params.idGrupo
    rankingModel.papel(idUsuario, idGrupo).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}


module.exports = {
    listar,
    papel
}