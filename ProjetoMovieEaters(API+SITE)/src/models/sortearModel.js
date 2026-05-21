var database = require("../database/config");

function resetarPapeis(idGrupo) {

    var instrucao = `
        UPDATE usuarioGrupo
        SET papel = 'watcher'
        WHERE fkGrupo = ${idGrupo};
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function escolherDiretor(idGrupo) {

    var instrucao = `
        UPDATE usuarioGrupo 
        SET papel = 'diretor'
        WHERE fkGrupo = ${idGrupo}
        AND fkUsuario = (
            SELECT fkUsuario FROM (
                SELECT fkUsuario
                FROM usuarioGrupo
                WHERE fkGrupo = ${idGrupo}
                ORDER BY vezes_diretor ASC, RAND()
                LIMIT 1
            ) AS sorteado
        );
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function somarVezesDiretor(idGrupo) {

    var instrucao = `
        UPDATE usuarioGrupo
        SET vezes_diretor = vezes_diretor + 1
        WHERE fkGrupo = ${idGrupo}
        AND papel = 'diretor';
    `;

    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    resetarPapeis,
    escolherDiretor,
    somarVezesDiretor
}