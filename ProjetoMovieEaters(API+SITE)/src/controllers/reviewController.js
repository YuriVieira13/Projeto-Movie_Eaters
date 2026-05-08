var reviewModel = require("../models/ReviewModel");

function listar(req, res) {
    reviewModel.listar().then(function(resultado){
        // precisamos informar que o resultado voltará para o front-end como uma resposta em json
        res.status(200).json(resultado);
    }).catch(function(erro){
        res.status(500).json(erro.sqlMessage);
    })
}

function cadastrar(req, res) {
    var nota = req.body.nota;
    var review = req.body.review;
    var idFilme = Number(req.body.idFilme);
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
        res.status(400).send("idUsuario está undefined!");
    }

    reviewModel.cadastrar(nota, review, idFilme, idUsuario).then(function(resposta){
        res.status(200).send("Review cadastrado com sucesso");
    }).catch(function(erro){
        
       if (erro.code == "ER_DUP_ENTRY") { // erro para testar se não tem duplicação das revies

        res.status(400).send("Você já avaliou esse filme"); // res vai ser a resposta que eu vou enviar para meu front

    } else {

        res.status(500).json(erro.sqlMessage); // já estava no código do aquatech

    }   

})
}



module.exports = {
    listar,
    cadastrar
}
