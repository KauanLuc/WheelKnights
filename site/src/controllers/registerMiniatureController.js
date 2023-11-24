var registerMiniatureModel = require("../models/registerMiniatureModel");


function cadastrar(req, res) {
    var colecao = req.body.fkColecao;
    var marca = req.body.fkMarca;
    var modelo = req.body.modelo;
    var tematica = req.body.fkTematica;
    var tipoVeiculo = req.body.fkTipoVeiculo;
    var valorCompra = req.body.valorCompra;
    var imagem = req.file.filename; 

    if (marca == undefined) {
        return res.status(400).send("A marca da sua miniatura está indefinida!");
    }
    if (modelo == undefined) {
        return res.status(400).send("O modelo da sua miniatura está indefinido!");
    }
    if (tipoVeiculo == undefined) {
        return res.status(400).send("O tipo de veículo da sua miniatura está indefinido!");
    }

    registerMiniatureModel.cadastrar(colecao, marca, modelo, tematica, tipoVeiculo, valorCompra, imagem)
        .then(function(resposta) {
            res.status(200).send("Miniatura cadastrada com sucesso");
        })
        .catch(function(erro) {
            console.error("Erro ao cadastrar miniatura:", erro);
            res.status(500).json({ erro: "Erro interno ao cadastrar miniatura", detalhes: erro.message });
        });
}

module.exports = {
    cadastrar
};