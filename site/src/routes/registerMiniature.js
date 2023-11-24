var express = require("express");
var router = express.Router();
var upload = require('../config/configUpload');
var registerMiniatureController = require("../controllers/registerMiniatureController");

router.post("/cadastrar", upload.single('foto'), function (req, res){
    registerMiniatureController.cadastrar(req, res);
});

module.exports = router;