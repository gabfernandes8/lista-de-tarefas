create database db_lista_tarefas_gary;

use db_lista_tarefas_gary;

create table tbl_tarefas
(
	id integer primary key auto_increment,
    titulo varchar(50),
    descricao text,
    concluido boolean,
    usuario_id integer,
    
    foreign key (usuario_id) references tbl_usuarios(id)
);

create table tbl_usuarios
(
	id integer primary key auto_increment,
    nome varchar(100),
    email varchar(50),
    senha varchar(10)
);

insert into tbl_usuarios (nome, email, senha)values
("Ryan Alves", "ryan@email.com", "123");