var database = require("../database/config");

function autenticar(userName, senha) {
    console.log("function entrar(): ", userName, senha);
    var instrucao = `
        SELECT idUsuario, username, email FROM usuario WHERE userName = '${userName}' AND senha = '${senha}';
    `;
    console.log(`Executando a instrução SQL: \n ${instrucao}`);
    
    return database.executar(instrucao)
        .then(result => {
            if (result.length > 0) {
                const usuario = result[0];
                return {
                    idUsuario: usuario.idUsuario,
                    username: usuario.username,
                    email: usuario.email
                };
            } else {
                return null;
            }
        });
}

function cadastrar(userName, email, senha) {
    console.log("function cadastrar():", userName, email, senha);

    var instrucao = `
        INSERT INTO usuario (userName, email, senha) VALUES ('${userName}', '${email}', '${senha}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
    .then(result => {
        
        const idUsuario = result.insertId;

        return cadastrarColecao(idUsuario);
    });
}

 function cadastrarColecao(idUsuario) {
    var instrucao = `
        INSERT INTO colecao (fkUsuario) VALUES ('${idUsuario}');
    `;
    return database.executar(instrucao);
}

module.exports = {
    autenticar, 
    cadastrar
}