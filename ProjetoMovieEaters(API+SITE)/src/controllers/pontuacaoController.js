var pontuacaoModel = require("../models/pontuacaoModel");

function listar(req, res) {
    pontuacaoModel.listar().then(function (resultado) {
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var idDiretor = Number(req.body.idDiretor);
    var idUsuario = Number(req.body.idUsuario);
    var idGrupo = Number(req.body.idGrupo);
    var pontosDiretor = Number(req.body.pontosDiretor);
    var pontosUsuario = Number(req.body.pontosUsuario);
    var tipo = req.body.tipo;
    var tipoUsuario = req.body.tipoUsuario;
    var idReferencia = Number(req.body.idReferencia);


    if (idDiretor == undefined) {
        res.status(400).send("O idDiretor está undefined!");
    }

    else if (idUsuario == undefined) {
        res.status(400).send("O idUsuario está undefined!");
    }

    else if (idGrupo == undefined) {
        res.status(400).send("O idGrupo está undefined!");
    }

    else if (pontosDiretor == undefined) {
        res.status(400).send("pontos está undefined!");
    }
     else if (pontosUsuario == undefined) {
        res.status(400).send("pontos está undefined!");
    }
    else if (tipo == undefined) {
        res.status(400).send("tipo está undefined!");
    }

    else if (tipoUsuario == undefined) {
        res.status(400).send("tipo Usuario está undefined!");
    }

    else if (idReferencia == undefined) {
        res.status(400).send("idReferencia está undefined!");
    }

    pontuacaoModel.cadastrar(idDiretor, idGrupo, idUsuario, pontosDiretor, pontosUsuario, tipo, tipoUsuario, idReferencia).then(function (resposta) {
        res.status(200).send("Avaliado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}