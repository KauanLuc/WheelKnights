var mysql = require("mysql2");
var sql = require('mssql');

// CONEXÃO DO SQL SERVER - AZURE (NUVEM)
var sqlServerConfig = {
    server: "SEU_SERVIDOR",
    database: "SEU_BANCO_DE_DADOS",
    user: "SEU_USUARIO",
    password: "SUA_SENHA",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true, // for azure
    }
}

// CONEXÃO DO MYSQL WORKBENCH
var mySqlConfig = {
    host: "localhost",
    database: "wheelknights",
    user: "root",
    password: "senha",
};

function executar(instrucao) {
    if (process.env.AMBIENTE_PROCESSO === "producao") {
        return new Promise(function (resolve, reject) {
            sql.connect(sqlServerConfig).then(function () {
                console.log("Conexão estabelecida com sucesso (SQL Server - Azure)");
                return sql.query(instrucao);
            }).then(function (resultados) {
                console.log(resultados);
                resolve(resultados.recordset);
            }).catch(function (erro) {
                console.error('ERRO: ', erro);
                reject(erro);
            });
            sql.on('error', function (erro) {
                console.error("ERRO NO SQL SERVER (Azure): ", erro);
            });
        });
    } else if (process.env.AMBIENTE_PROCESSO === "desenvolvimento") {
        return new Promise(function (resolve, reject) {
            var conexao = mysql.createConnection(mySqlConfig);
            conexao.connect(function (erro) {
                if (erro) {
                    console.error("Erro na conexão com MySQL Workbench:", erro);
                    reject(erro);
                } else {
                    console.log("Conexão estabelecida com sucesso (MySQL Workbench)");
                    conexao.query(instrucao, function (erro, resultados) {
                        conexao.end();
                        if (erro) {
                            console.error("Erro na query MySQL Workbench:", erro);
                            reject(erro);
                        } else {
                            console.log(resultados);
                            resolve(resultados);
                        }
                    });
                }
            });
            conexao.on('error', function (erro) {
                console.error("ERRO NO MySQL WORKBENCH: ", erro.sqlMessage);
            });
        });
    } else {
        return Promise.reject("AMBIENTE NÃO CONFIGURADO EM app.js");
    }
}


module.exports = {
    executar
}