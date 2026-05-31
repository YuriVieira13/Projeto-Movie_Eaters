var database = require("../database/config")


function listarReview(idUsuario, idGrupo) {
    var instrucao = `
        SELECT r.idReview, f.nome as Filme, r.nota, r.review
        from review r
        JOIN filme f ON
        r.fkFilme = f.idFilme
        WHERE r.fkUsuario = ${idUsuario} AND f.fkGrupo = ${idGrupo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarFilmes(idGrupo) {
    var instrucao = `
        SELECT idFilme, nome, poster,  DATE_FORMAT(dt_insercao, "%d/%m/%y") AS semana from filme
        WHERE fkGrupo = ${idGrupo};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarFilmes,
    listarReview
}
