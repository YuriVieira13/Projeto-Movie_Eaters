var database = require("../database/config")


function listar(codigo) {
    var instrucao = `
        SELECT idGrupo FROM grupo WHERE codigo = '${codigo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nomeGrupo, codigo) {
    var instrucao = `
        INSERT INTO grupo (nome, codigo) VALUES ('${nomeGrupo}', '${codigo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(idUsuario, idGrupo, papel) {
    var instrucao = `
        INSERT INTO usuarioGrupo (fkUsuario, fkGrupo, papel) VALUES (${idUsuario}, ${idGrupo}, '${papel}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    entrar
};