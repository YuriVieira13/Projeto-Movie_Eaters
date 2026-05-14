var reviewModel = require("../models/ReviewModel");

function listar(req, res) {
    var idFilme = req.params.idFilme
    reviewModel.listar(idFilme).then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nota = req.body.nota;
    var review = req.body.review;
    var idFilme = req.body.idFilme;
    var idUsuario = req.body.idUsuario;

    if (nota == undefined) {
        res.status(400).send("A nota do filme está undefined!");
    }

    else if (review == undefined) {
        res.status(400).send("O review está undefined!");
    }

     else if (idFilme == undefined) {
        res.status(400).send("O idFilme está undefined!");
    }

      else if (idUsuario == undefined) {
        res.status(400).send("fkUsuario está undefined!");
    }

    reviewModel.cadastrar(nota, review, idFilme, idUsuario).then(function(resposta){
        res.status(200).send("Review cadastrado com sucesso");
    }).catch(function(erro){
        
       if (erro.code == "ER_DUP_ENTRY") { // erro para testar se não tem duplicação das revies

        res.status(400).send("Você não pode fazer duas reviews do mesmo filme"); // res vai ser a resposta que eu vou enviar para meu front

    } else {

        res.status(500).json(erro.sqlMessage); //

    }   

})
}

function deletar(req, res) {
    var idReview = req.params.idReview;

    reviewModel.deletar(idReview)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function curtir(req, res) {
    var fkUsuario = req.body.fkUsuario; 
    var idGrupo = req.body.idGrupo; 
    var pontos = Number(req.body.pontos);
    var tipo = req.body.tipo;  
    var idReferencia = req.body.idReferencia;


    if (fkUsuario == undefined) {
        res.status(400).send("O fkUsuario do filme está undefined!");
    }

    else if (idGrupo == undefined) {
        res.status(400).send("O idGrupo está undefined!");
    }

     else if (pontos == undefined) {
        res.status(400).send("Os pontos está undefined!");
    }

     else if (tipo == undefined) {
        res.status(400).send("O tipo assistir está undefined!");
    }
      else if (idReferencia == undefined) {
        res.status(400).send("idReferencia está undefined!");
    }

    reviewModel.curtir(fkUsuario, idGrupo, pontos, tipo, idReferencia).then(function(resposta){
        res.status(200).send("Filme cadastrado com sucesso");
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    listar,
    cadastrar,
    deletar,
    curtir
}
