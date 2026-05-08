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

function cadastrar(nota, review, idFilme, idUsuario) {
    var instrucao = `
        INSERT INTO review(nota, review, fkFilme, fkUsuario) VALUES ('${nota}', '${review}', ${idFilme}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    listar
};