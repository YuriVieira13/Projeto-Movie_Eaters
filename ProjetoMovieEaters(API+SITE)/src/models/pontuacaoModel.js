var database = require("../database/config")


function listar() {
    var instrucao = `
        SELECT
	nome,
    fkUsuario AS player,
    SUM(pontos) AS total
    FROM usuario u JOIN historico_pontos hp
    ON u.id = hp.fkUsuario
    WHERE fkGrupo = 1
    GROUP BY fkUsuario
    ORDER BY total DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(idDiretor, idGrupo, idUsuario, pontosDiretor, pontosUsuario, tipo, tipoUsuario, idReferencia) {
    var instrucao1 = `
        INSERT INTO historico_pontos (fkUsuario, fkGrupo, pontos, tipo, idReferencia) VALUES ('${idDiretor}', '${idGrupo}', ${pontosDiretor}, '${tipo}', ${idReferencia});
`
 var instrucao2 = `
        INSERT INTO historico_pontos (fkUsuario, fkGrupo, pontos, tipo, idReferencia) VALUES ('${idUsuario}', '${idGrupo}', ${pontosUsuario}, '${tipoUsuario}', ${idReferencia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao1);

    return Promise.all([
        database.executar(instrucao1),
        database.executar(instrucao2)
    ]);
}

module.exports = {
    cadastrar,
    listar
};