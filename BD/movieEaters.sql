CREATE DATABASE movieEaters;

USE movieEaters;

CREATE TABLE usuario (

id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50));
    
    SELECT * FROM usuario;
    
    
	CREATE TABLE grupo (
	idGrupo INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR (30),
    qnt_pessoas INT);
    
    SELECT * FROM grupo;
    
	INSERT INTO grupo VALUES
	(default, 'Turma A', '4');
    
CREATE TABLE usuarioGrupo (
	fkUsuario INT,
    fkGrupo INT,
    papel varchar(45),
    constraint ck_papel CHECK (papel in ("diretor", "watcher")),
    PRIMARY KEY (fkUsuario, fkGrupo),
    FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
    FOREIGN KEY (fkGrupo) REFERENCES grupo (idGrupo)
);

	INSERT INTO usuarioGrupo VALUES
    (1, 1, "diretor"),
    (2, 1, "watcher");
    
    SELECT * FROM usuarioGrupo;


CREATE TABLE filme (
    idfilme INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    diretor VARCHAR(45),
    ano CHAR(4),
    onde_assistir VARCHAR(45),
    fkUsuario INT,
    fkGrupo INT,
	CONSTRAINT fk_filme_usuario
	FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
    CONSTRAINT fk_filme_grupo
	FOREIGN KEY (FkGrupo) REFERENCES grupo(idGrupo)
);


SELECT * FROM filme;



    
    
    