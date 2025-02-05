process.env.AMBIENTE_PROCESSO = "desenvolvimento";

var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = process.env.AMBIENTE_PROCESSO == "desenvolvimento" ? 3333 : 8080;

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "site", "views"));


var indexRouter = require("./src/routes/index");
var userRouter = require("./src/routes/user");
var feedRouter = require("./src/routes/feed");
var registerMiniatureRouter = require("./src/routes/registerMiniature");
var dashboardRouter = require("./src/routes/dashboard");


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/user", userRouter);
app.use("/feed", feedRouter);
app.use("/registerMiniature", registerMiniatureRouter);
app.use("/dashboard", dashboardRouter);

app.listen(PORTA, function () {
    console.log(`Servidor do seu site já está rodando! Acesse o caminho a seguir para visualizar: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em Ambiente de ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", você está se conectando ao banco LOCAL (MySQL Workbench). \n
    \t\tSe "producao", você está se conectando ao banco REMOTO (SQL Server em nuvem Azure) \n
    \t\t\t\tPara alterar o ambiente, comente ou descomente as linhas 1 ou 2 no arquivo 'app.js'`);
});