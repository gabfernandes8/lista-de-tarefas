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
("Ryan Alves", "ryan@email.com", "123"),
("Gabriela Fernandes", "gab@email.com", "123");

-- Pesquisas --

select * from tbl_usuarios;

select id from tbl_usuarios where email = "ryan@email.com";

update tbl_usuarios set 
					nome='Vitor de Jesus',
                    email='vitor@email.com',
                    senha='seinao' 
			where id=2;

select * from tbl_tarefas where usuario_id = 1;

select * from tbl_tarefas where usuario_id = 1 and concluido = false;

select * from tbl_tarefas where id = 1 and usuario_id = 1;

update tbl_tarefas set concluido = true where id = 1 and usuario_id = 1;

update tbl_tarefas set concluido = false where id = 1 and usuario_id = 1;

update tbl_tarefas set 
					titulo = "Fazer compras",	
                    descricao = "Ir no mercado e comprar chocolate"
					where id = 1 and usuario_id = 1;
        
delete from tbl_tarefas where id = 2 and usuario_id = 1;

insert into tbl_tarefas (
							titulo,
                            descricao,
                            concluido,
                            usuario_id
						) values (
							"Fazer compras",
							"Ir no mercado e comprar sorvete",
							false,
							1
						);
                        
insert into tbl_tarefas (
                                        titulo,
                                        descricao,
                                        concluido,
                                        usuario_id
                                        ) values (
                                            'Fazer compras',
                                            'Comprar chocolate',
                                            false,
                                            1
                                        );
                        