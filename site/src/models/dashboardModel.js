var database = require("../database/config");

function mostrarColecao(idUsuario) {
    var instrucao = `
        SELECT modelo, tema, tipo,  
        marca, valorCompra, imagem_miniatura FROM miniatura
        JOIN colecao ON fkColecao = fkUsuario
        JOIN usuario ON fkUsuario = idUsuario
        JOIN marca ON fkMarca = idMarca
        JOIN tematica ON fkTematica = idTematica
        JOIN tipoVeiculo ON fkTipoVeiculo = idTipoVeiculo WHERE fkColecao = '${idUsuario}' ORDER BY modelo;
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
        SELECT modelo, valorCompra FROM miniatura WHERE fkColecao = '${idUsuario}' ORDER BY valorCompra DESC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function miniaturaMaisBarata(idUsuario) {
    var instrucao = `
        SELECT modelo, valorCompra FROM miniatura WHERE fkColecao = '${idUsuario}' ORDER BY valorCompra ASC LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function marcasFavoritas(idUsuario){
    var instrucao = `
    SELECT marca, COUNT(*) as quantidade
    FROM miniatura
    JOIN marca ON fkMarca = idMarca WHERE fkColecao = '${idUsuario}'
    GROUP BY fkMarca ORDER BY quantidade desc; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function valorPMarca(idUsuario){
    var instrucao = `
        SELECT marca, SUM(valorCompra) as quantidade
        FROM miniatura
        JOIN marca ON fkMarca = idMarca WHERE fkColecao = '${idUsuario}'
        GROUP BY fkMarca ORDER BY quantidade desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function tipoVeiculoFavorito(idUsuario){
    var instrucao = `
        SELECT tipo, COUNT(*) as quantidade
        FROM miniatura
        JOIN tipoVeiculo ON fkTipoVeiculo = idTipoVeiculo WHERE fkColecao = '${idUsuario}'
        GROUP BY fkTipoVeiculo ORDER BY quantidade desc;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function valorPTipo(idUsuario){
    var instrucao = `
        SELECT tipo, SUM(valorCompra) as quantidade
        FROM miniatura
        JOIN tipoVeiculo ON fkTipoVeiculo = idTipoVeiculo WHERE fkColecao = '${idUsuario}'
        GROUP BY fkTipoVeiculo ORDER BY quantidade desc;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarColecao,
    qtdMiniaturas,
    estimativaValorColecao,
    miniaturaMaisCara,
    miniaturaMaisBarata,
    marcasFavoritas, 
    valorPMarca,
    tipoVeiculoFavorito,
    valorPTipo
};