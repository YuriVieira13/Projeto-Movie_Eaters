var grupoModel = require("../models/grupoModel");

function listar(req, res) { // função para pegar o nome e o código do grupo
    var codigo = req.params.codigo

    grupoModel.listar(codigo).then(function (resultado) {

        if (resultado.length == 0) {
            return res.status(404).send("Grupo não encontrado");
        } else { res.status(200).json(resultado); }
    })

        .catch(function (erro) {
            return res.status(500).json(erro.sqlMessage);
        })
}

function cadastrar(req, res) {
    var nomeGrupo = req.body.nomeGrupo;
    var codigo = req.body.codigo;


    if (nomeGrupo == undefined) {
        return res.status(400).send("O nomeGrupo está undefined!");
    }

    else if (codigo == undefined) {
        return res.status(400).send("O codigo está undefined!");
    }

    grupoModel.cadastrar(nomeGrupo, codigo).then(function (resposta) {
        res.status(200).send("Grupo criado com sucesso");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}

function entrar(req, res) {
    var idGrupo = req.body.idGrupo;
    var idUsuario = req.body.idUsuario;
    var papel = req.body.papel;
    var vezesDiretor = req.body.vezesDiretor;

    if (idGrupo == undefined) {
         return res.status(400).send("O idGrupo está undefined!");
    }

    else if (idUsuario == undefined) {
         return res.status(400).send("O idUsuario está undefined!");
    }
      else if (papel == undefined) {
         return res.status(400).send("O papel está undefined!");
    }

    grupoModel.entrar(idUsuario, idGrupo, papel, vezesDiretor).then(function (resposta) {
        res.status(200).send("Entrou no grupo");
    }).catch(function (erro) {

          if (erro.code == "ER_DUP_ENTRY") { // no banco de dados, eu estou usando chave composta (fkUsuario e fkGrupo), esse erro é esperado e usado para não cadastrar novamente o usuário, direcionando ele direto para o grupo
          return res.status(200).send("Já estava no grupo");
      }
        res.status(500).json(erro.sqlMessage);
    })
}

function listarGrupos(req, res) {
      var idUsuario = req.params.idUsuario
    grupoModel.listarGrupos(idUsuario).then(function(resultado){
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    entrar,
    listarGrupos
}