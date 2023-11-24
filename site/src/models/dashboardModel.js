var database = require("../database/config");

function mostrarColecao(idUsuario) {
    var instrucao = `
        SELECT imagem_miniatura, modelo, fkMarca, fkTipoVeiculo, fkTematica, valorCompra FROM miniatura WHERE fkColecao = '${idUsuario}';
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
    JOIN marca  ON fkMarca = idMarca where fkColecao = '${idUsuario}'
    GROUP BY fkMarca order by quantidade desc; 
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    mostrarColecao,
    qtdMiniaturas,
    estimativaValorColecao,
    miniaturaMaisCara,
    miniaturaMaisBarata,
    marcasFavoritas
};