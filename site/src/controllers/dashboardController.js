var dashboardModel = require("../models/dashboardModel");

function mostrarColecao(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.mostrarColecao(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function qtdMiniaturas(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.qtdMiniaturas(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function estimativaValorColecao(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.estimativaValorColecao(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function miniaturaMaisCara(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.miniaturaMaisCara(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function miniaturaMaisBarata(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.miniaturaMaisBarata(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function marcasFavoritas(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.marcasFavoritas(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: 'Erro interno do servidor' });
        });
}

function valorPMarca(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.valorPMarca(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        });
}

function tipoVeiculoFavorito(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.tipoVeiculoFavorito(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        });
}

function valorPTipo(req, res) {
    const idUsuario = req.params.idUsuario;

    dashboardModel.valorPTipo(idUsuario)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((error) => {
            console.log(error);
            res.status(500).json({ error: 'Erro interno do servidor'});
        });
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
