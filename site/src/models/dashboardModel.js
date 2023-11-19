var database = require("../database/config");

function mostrarColecao(idUsuario) {
    var instrucao = `
        SELECT modelo, fkMarca, tipoVeiculo, fkTematica, valorCompra FROM miniatura WHERE fkColecao = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function qtdMiniaturas(idUsuario) {
    var instrucao = `
        SELECT COUNT(modelo) FROM miniatura WHERE fkColecao = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function estimativaValorColecao(idUsuario) {
    var instrucao = `
        SELECT SUM(valorCompra) FROM miniatura WHERE fkColecao = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function miniaturaMaisCara(idUsuario) {
    var instrucao = `
        SELECT modelo, MAX(valorCompra), fkMarca FROM miniatura WHERE fkColecao = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function miniaturaMaisBarata(idUsuario) {
    var instrucao = `
        SELECT modelo, MIN(valorCompra), fkMarca FROM miniatura WHERE fkColecao = '${idUsuario}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarColecao,
    qtdMiniaturas,
    estimativaValorColecao,
    miniaturaMaisCara,
    miniaturaMaisBarata
};