const { register } = require("module");
var userModel = require("../models/userModel");
var registerMiniatureModel = require("../models/registerMiniatureModel");

function autenticar(req, res) {
    const userName = req.body.userNameServer;
    const senha = req.body.senhaServer;

    if (!userName || !senha) {
        return res.status(400).send("O username e a senha são obrigatórios.");
    }

    userModel.autenticar(userName, senha)
    .then(function (resultadoAutenticar) {
        console.log(`Resultados encontrados: ${resultadoAutenticar}`);

        if (resultadoAutenticar) {
            res.status(200).json({
                message: "Login bem-sucedido",
                idUsuario: resultadoAutenticar.idUsuario,
                username: resultadoAutenticar.username,
                email: resultadoAutenticar.email
            });
        } else {
            res.status(403).json({ error: "Username e/ou senha inválido(s)" });
        }
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
        res.status(500).json({ error: "Erro interno do servidor" });
    });
}

// Restante do seu código...


function cadastrar(req, res) {
    var userName = req.body.userNameServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (userName == undefined) {
        return res.status(400).send("Seu nome está undefined!");
    } 
    if (email == undefined) {
        return res.status(400).send("Seu email está undefined!");
    }
    if (senha == undefined) {
        return res.status(400).send("Sua senha está undefined!");
    } 

    userModel.cadastrar(userName, email, senha)
    .then(
        function (resultado) {
            res.json(resultado);
        }
    ).catch(
        function (erro) {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o cadastro! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        }
    );
}


module.exports = {
    autenticar,
    cadastrar
}