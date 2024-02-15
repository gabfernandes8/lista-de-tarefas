create database db_lista_tarefas_gary;

use db_lista_tarefas_gary;

create table tbl_tarefas
(
	id integer primary key auto_increment,
    titulo varchar(50),
    descricao text,
    concluido boolean
);