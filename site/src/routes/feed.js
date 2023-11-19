var express = require("express");
var router = express.Router();

router.post("/feed", function (req, res){
    res.render("feed");
})

module.exports = router;