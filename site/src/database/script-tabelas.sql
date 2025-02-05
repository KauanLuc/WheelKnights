create database wheelknights;

use wheelknights;

create table usuario(
idUsuario int primary key auto_increment,
userName varchar(45) not null unique,
email varchar(45) not null unique,
senha varchar(45) not null
);

create table colecao(
fkUsuario int primary key,
foreign key (fkUsuario) references usuario(idUsuario)
);

create table marca(
idMarca int primary key auto_increment,
marca varchar(45)
);

create table tematica(
idTematica int primary key auto_increment,
tema varchar(45)
);

create table tipoVeiculo(
idTipoVeiculo int primary key auto_increment,
tipo varchar(45)
);

create table miniatura(
idMiniatura int primary key auto_increment,
fkColecao int,
fkMarca int,
modelo varchar(45) not null,
fkTematica int,
fkTipoVeiculo int,
valorCompra decimal(8, 2),
imagem_miniatura varchar(255),
foreign key (fkColecao) references colecao(fkUsuario),
foreign key (fkMarca) references marca(idMarca),
foreign key (fkTematica) references tematica(idTematica),
foreign key (fkTipoVeiculo) references tipoVeiculo(idTipoVeiculo)
);