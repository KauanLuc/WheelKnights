var database = require("../database/config");

function cadastrar(colecao, marca, modelo, tematica, tipoVeiculo, valorCompra, imagem) {
    var instrucao = `
        INSERT INTO miniatura (fkColecao, fkMarca, modelo, fkTematica, fkTipoVeiculo, valorCompra, imagem_miniatura)
        VALUES ('${colecao}', '${marca}', '${modelo}', '${tematica}', '${tipoVeiculo}', '${valorCompra}', '${imagem || null}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar
};
