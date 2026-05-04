var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT * FROM filme
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

module.exports = {
    cadastrar,
    listar
};