var database = require("../database/config")


function listar(codigo) {
    var instrucao = `
        SELECT nome, idGrupo FROM grupo WHERE codigo = '${codigo}';
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

function entrar(idUsuario, idGrupo, papel, vezesDiretor) {
    var instrucao = `
        INSERT INTO usuarioGrupo (fkUsuario, fkGrupo, papel, vezes_diretor) VALUES (${idUsuario}, ${idGrupo}, '${papel}', '${vezesDiretor}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function listarGrupos(idUsuario) {
    var instrucao = `
        SELECT g.nome, g.codigo FROM grupo g
        JOIN usuarioGrupo ug ON
        ug.FKgrupo = g.idGrupo
        JOIN usuario u ON
        ug.FKusuario = u.id
        WHERE id = ${idUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar,
    entrar,
    listarGrupos
};