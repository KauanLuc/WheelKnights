var express = require("express");
var router = express.Router();

var registerMiniatureController = require("../controllers/registerMiniatureController");

router.post("/cadastrar", function (req, res){
    registerMiniatureController.cadastrar(req, res);
});

module.exports = router;