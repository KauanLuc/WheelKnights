var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");


router.get('/mostrarColecao/:idUsuario', dashboardController.mostrarColecao);

router.get('/qtdMiniaturas/:idUsuario', dashboardController.qtdMiniaturas);

router.get('/estimativaValorColecao/:idUsuario', dashboardController.estimativaValorColecao);

router.get('/miniaturaMaisCara/:idUsuario', dashboardController.miniaturaMaisCara);

router.get('/miniaturaMaisBarata/:idUsuario', dashboardController.miniaturaMaisBarata);

module.exports = router;
