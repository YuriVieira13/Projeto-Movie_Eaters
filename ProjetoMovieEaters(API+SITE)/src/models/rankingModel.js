var database = require("../database/config")


function listar() {
    var instrucao = `
    SELECT
    nome,
    YEARWEEK(dataPontuacao, 1) AS semana,
    fkUsuario AS player,
    SUM(pontos) AS total,
    (
        SELECT COUNT(DISTINCT YEARWEEK(dataPontuacao, 1))
        FROM historico_pontos
        WHERE fkGrupo = 1
    ) AS qtdSemanas

    FROM usuario u
    JOIN historico_pontos hp
    ON u.id = hp.fkUsuario

    WHERE fkGrupo = 1

    GROUP BY nome, semana, fkUsuario

    ORDER BY semana ASC, total DESC;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}
module.exports = {
    listar
};