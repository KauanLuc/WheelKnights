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
foreign key (fkUsuario) references usuario(idUsuario), 
dataCriacao datetime default current_timestamp
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

insert into marca (marca) values
('Outra'),
('Hot Wheels'), 
('Matchbox'),
('Kyosho'),
('Tomy'),
('Siku'),
('Jada'),
('Johnny Lightning'),
('Maisto'),
('Burago'),
('Autoart'),
('Greenlight'),
('Welly'),
('Tomica'),
('Corgi'),
('Majorette'),
('Norev'),
('Schuco'),
('Minichamps'),
('Solido'),
('M2 Machines'),
('Motor Max'),
('Sun Star'),
('Auto World'),
('Road Signature'),
('Signature Models'),
('Kinsmart');

insert into tematica (tema) values
('Nenhum'),
('Outro'),
('Os Simpsons'),
('Batman'),
('Os Flintstones'),
('Scooby-Doo!'),
('Velozes e Furiosos'),
('Star Wars'),
('Mario Kart'),
('Back to the Future'),
('Ghostbusters'),
('Harry Potter'),
('James Bond'),
('Jurassic Park'),
('Transformers'),
('Supernatural');

insert into tipoVeiculo (tipo) values
('Outro'),
('Carro'),
('Moto'),
('Caminhão'),
('Militar'),
('Barco'),
('Avião'),
('Ônibus'),
('Construção'),
('Emergência'),
('Espacial');

insert into usuario (userName, email, senha) values
	('admin', 'admin@admin.com', '12345678');
    
insert into colecao values
	(1);
    
insert into miniatura (fkColecao, fkMarca, modelo, fkTematica, fkTipoVeiculo, valorCompra, imagem_miniatura) values
	(1, 2, 'LB super silhouette nissan silvia (s15)', 1, 2, 20.00, '77b25236900abc11dc006faf454db19588ef7463c1c532fe02754fbf4bb6a14994e533bbb67a30db75107655a4f36ec8ab67b88174a909087db697202b494b2d.jpg'),
    (1, 2, 'batmobile', 4, 5, 15.00, '739f16013f7f8a2e742888a389697bc65624cf5947032182036d7792d7eb47d4206f03353643aa304820b83d602dd7e1dbfb5ff763024bf93c202d7823727352.jpg'),
    (1, 2, '68 chevy el Camino', 1, 2, 12.00, '9f0cfdf78d208f74a53ed35cdaf3ec1ca17e229692b0f9e77379092afb6917c8a17009a3e8a8719ff6e152035563f5ea7245afb4675b6225cf793175744ce2d4.jpg'),
    (1, 2, 'Volkswagen Golf GTI', 1, 2, 12.00, 'a19579fe29f640bebc5fd998abd1043464f53e8e5d73bd4a4bc86721faeaa001a5363f717ba761baf8048487abb9fdb1957cd920d4dfc5e5131f748c0667f4a8.jpg'),
    (1, 2, 'b44', 1, 2, 15.00, 'b5bcc5027fda953ba7f34c84831794d89fd6055ea52564a9d514af07f2ed40ced2ea566f663c92721771b0ae19e9a700e162432fcfeaaee1c87bab44e91c00ff.jpg'),
    (1, 2, 'chevy camaro 2011', 1, 2, 30.00, '713992d771b7678e62fca6fb63cbc6bab14d093ef8794c10d928764d0816b8770fa8c16fb34f28e6a1028b62485f4cb565d46f541bbfba7047212337fff9ec54.jpg'),
    (1, 9, 'lamborghini aventador', 1, 2, 18.00, '01c96f6b844fc70ae3f1ce54d1c6f00c291ae90b19e00c93266820bab31d654323063fb813d949dbac3d12f330569b48b98c74856751856937933b20731b10f9.jpg'),
    (1, 2, 'mazda RX-7', 1, 2, 40.00, '82145b0d3146814458e1977e8a980b5db4176d74edadadf6e3db8aa91c08f91609950522c55eeb42a5356ae0c38ba83ed5b9a6ed1ef4237ffada9df693c8da21.jpg'),
    (1, 2, 'tooned twin mill', 1, 2, 23.03, 'ffbc928569ed1f18437648c6eb338e33bfce2b93a5ae66916bfbbedb28ee16beee2d2f0f759a4a8dbbae70547dfb333ebddc70b7666e17174bb590e13a6ae65e.jpg'),
    (1, 2, 'mini cooper s challenge', 1, 2, 17.00, '29dad833661326ae8039dbdd59a02440d720ab5464ae21e442afa2c624c45a4885864468b3ec31d80b9c2f667561c4cc3157505e59817e78d860b92fff67674b.jpg'),
    (1, 2, 'dessert drifter', 1, 2, 23.99, '9f6be29287f45bfb5145f24de1fc00710b27a59cb5107dff61695f3bee97b5ad34d3300c35a6860abe26c1585110cc3f8e6c4646bc80d1372d5886ef5a2a94f6.jpg'),
    (1, 2, '67 Pontiac firebird', 1, 2, 40.00, 'd26102946d682711cb42ea21644c31cac89565ad1e89d71912db3778bb800bc5a08c303e78471a8dbf3c154e8ed3d79136ab16b8abb1c5b451a974a53784ea30.jpg'),
    (1, 2, 'volks fusca 93', 1, 2, 10.00, 'null');

select * from usuario;

select * from colecao;

select * from miniatura;

select * from marca;

select * from tematica;

select username, email, modelo, tema, tipo,  
marca, valorCompra, imagem_miniatura from miniatura
join colecao on fkColecao = fkUsuario
join usuario on fkUsuario = idUsuario
join marca on fkMarca = idMarca
join tematica on fkTematica = idTematica
join tipoVeiculo on fkTipoVeiculo = idTipoVeiculo where fkColecao = 1 order by modelo;

select username, sum(valorCompra) from miniatura 
join colecao on fkColecao = fkUsuario
join usuario on fkUsuario = idUsuario
where username = 'admin';

select modelo, valorCompra from miniatura where fkColecao = 1 order by valorCompra asc limit 1;

select * from miniatura where fkColecao =1;
        
select fkMarca from miniatura where fkColecao = 1 order by fkMarca;

select marca, COUNT(*) as quantidade
from miniatura
join marca  on fkMarca = idMarca where fkColecao = 1
group by fkMarca order by quantidade desc;

select imagem_miniatura, modelo, fkMarca, fkTipoVeiculo, fkTematica, valorCompra from miniatura where fkColecao = '1';

select marca, SUM(valorCompra) as quantidade
from miniatura
join marca  ON fkMarca = idMarca where fkColecao = 1
group by fkMarca order by quantidade desc;






