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
    
    INSERT INTO usuarioGrupo VALUES
    (3, 1, "watcher");
    
     INSERT INTO usuarioGrupo VALUES
    (4, 1, "diretor");
    
    SELECT * FROM usuarioGrupo;
	Select u.id, u.nome, u.email, ug.papel
    FROM usuario AS u JOIN usuarioGrupo as ug
    ON u.id = ug.fkUsuario;

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

CREATE TABLE historico_pontos (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fkUsuario INT NOT NULL,
  fkGrupo INT NOT NULL,
  pontos INT NOT NULL, 
  tipo VARCHAR(50) NOT NULL,
  -- ex: 'curtida_review', 'curtida_filme', 'nao_curtiu'
  idReferencia INT NULL,
  dataPontuacao DATETIME DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT c_fk_usuario 
    FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
  CONSTRAINT c_fk_grupo 
    FOREIGN KEY (fkGrupo) REFERENCES grupo (idgrupo)

  -- evita duplicação de ação
  -- CONSTRAINT unique_acao 
  --  UNIQUE (usuario_id, tipo, referencia_id)
);

    
    
    