var registerMiniatureModel = require("../models/registerMiniatureModel");

function buscarMiniaturasporUsuario(req, res) {
    var idUsuario = req.params.idUsuario;

    registerMiniatureModel.buscarMiniaturasporUsuario(idUsuario).then((resultado) => {
        if (resultado.length > 0){
            res.status(200).json(resultado);
        } else{
            res.status(204).json([]);
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as miniaturas: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
    });
}

function cadastrar (req, res) {
    var marca = req.body.marcaServer;
    var modelo = req.body.modeloServer;
    var tematica = req.body.tematicaServer;
    var tipoVeiculo = req.body.tipoVeiculoServer;
    var valorCompra = req.body.valorCompraServer;

    if (marca == undefined) {
        return res.status(400).send("A marca da sua miniatura está indefinida!");
    }
    if (modelo == undefined) {
        return res.status(400).send("O modelo da sua miniatura está indefinido!");
    }
    if (tipoVeiculo == undefined) {
        return res.status(400).send("O tipo de veículo da sua miniatura está indefinido!");
    }

    registerMiniatureModel.cadastrar(marca, modelo, tematica, tipoVeiculo, valorCompra).then(function(resposta){
        res.status(200).send("Miniatura cadastrada com sucesso");
    }).catch(function(erro){
        console.error("Erro ao cadastrar miniatura:", erro);
        res.status(500).json({ erro: "Erro interno ao cadastrar miniatura", detalhes: erro.message });
    });
}

module.exports = {
    cadastrar,
    buscarMiniaturasporUsuario
};