var database = require("../database/config")


function listar(idGrupo) {
    var instrucao = `
        SELECT * FROM filme
        WHERE fkGrupo = ${idGrupo}
        ORDER BY idfilme DESC
        LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, diretor, ano, ondeAssistir, idUsuario, idGrupo, poster) {
    var instrucao = `
        INSERT INTO filme (nome, diretor, ano, onde_assistir, fkUsuario, fkGrupo, poster) VALUES ('${nome}', '${diretor}', ${ano}, '${ondeAssistir}', ${idUsuario}, ${idGrupo}, '${poster}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function deletar(idFilme) {
    var instrucaoSql = `
        DELETE FROM filme WHERE idFilme = ${idFilme};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    listar,
    deletar
};