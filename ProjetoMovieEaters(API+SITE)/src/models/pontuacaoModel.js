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

function cadastrar(idDiretor, idGrupo, idUsuario, pontos, tipo, tipoUsuario, idReferencia) {
    var instrucao = `
        INSERT INTO historico_pontos (fkUsuario, fkGrupo, pontos, tipo, idReferencia) VALUES ('${idDiretor}', '${idGrupo}', ${pontos}, '${tipo}', ${idReferencia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};