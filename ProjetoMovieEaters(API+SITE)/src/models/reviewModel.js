var database = require("../database/config")


function listar(idFilme) {
    var instrucao = `
        SELECT r.idReview, u.nome as Usuario, f.nome as Filme, r.nota, r.review
        FROM review r JOIN filme f
        ON r.fkFilme = f.idFilme
        JOIN usuario u
        ON r.fkUsuario = u.id
        WHERE idfilme = ${idFilme}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nota, review, idFilme, idUsuario) {
    var instrucao = `
        INSERT INTO review(nota, review, fkFilme, fkUsuario) VALUES ('${nota}', '${review}', ${idFilme}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idReview) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idReview);
    var instrucaoSql = `
        DELETE FROM review WHERE idReview = ${idReview};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    deletar
};