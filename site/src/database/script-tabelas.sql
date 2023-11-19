create database wheelknights;

use wheelknights;

create table miniatura(
    idMiniatura int primary key auto_increment,
    fkColecao int,
    fkMarca int,
    modelo varchar(45),
    fkTematica int, 
    tipoVeiculo varchar(45),
    valorCompra decimal(8, 2)
);

create table usuario(
idUsuario int primary key auto_increment,
userName varchar(45),
email varchar(45),
senha varchar(45)
);

create table colecao(
fkUsuario int primary key,
foreign key (fkUsuario) references usuario(idUsuario)
);