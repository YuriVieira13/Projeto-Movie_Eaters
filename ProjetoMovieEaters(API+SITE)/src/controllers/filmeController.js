var filmeModel = require("../models/filmeModel");

function listar(req, res) {
    filmeModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nome = req.body.nome; // AVATAR
    var diretor = req.body.diretor; // James Cameron
    var ano = Number(req.body.ano);
    var ondeAssistir = req.body.ondeAssistir;
    var idUsuario = req.body.idUsuario;
    var idGrupo = req.body.idGrupo;
    var poster = req.file.filename; // filename porque é como vêm no arquivo do DataForm o nome salvo no banco pós hex no config
    // multer aqui serve para receber o dataform divindo o que é body - texto do que é file - arquivo

    if (nome == undefined) {
        res.status(400).send("O nome do filme está undefined!");
    }

    else if (diretor == undefined) {
        res.status(400).send("O nome do diretor está undefined!");
    }

     else if (ano == undefined) {
        res.status(400).send("O ano está undefined!");
    }

     else if (ondeAssistir== undefined) {
        res.status(400).send("Onde assistir está undefined!");
    }
      else if (idUsuario == undefined) {
        res.status(400).send("idUsuario está undefined!");
    }

     else if (idGrupo == undefined) {
        res.status(400).send("idGrupo  está undefined!");
    }

        else if (poster == undefined) {
        res.status(400).send("Poster  está undefined!");
    }

    filmeModel.cadastrar(nome, diretor, ano, ondeAssistir, idUsuario, idGrupo, poster).then(function(resposta){
        res.status(200).send("Filme cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar
}
