var database = require("../database/config");

function buscarMiniaturasporUsuario(idUsuario) {
    instrucao = `
        SELECT * FROM miniatura WHERE fkMarca = ${idUsuario};
    `
    console.log(`Executando ${instrucao}`);
    return database.executar(instrucao);
}

function cadastrar(colecao, marca, modelo, tematica, tipoVeiculo, valorCompra) {
    var instrucao = `
        INSERT INTO miniatura (fkColecao, fkMarca, modelo, fkTematica, fkTipoVeiculo, valorCompra)
        VALUES ('${colecao}', '${marca}', '${modelo}', '${tematica}', '${tipoVeiculo}', '${valorCompra}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    buscarMiniaturasporUsuario
};
