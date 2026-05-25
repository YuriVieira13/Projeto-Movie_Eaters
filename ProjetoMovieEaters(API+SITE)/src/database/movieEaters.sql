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
    
    ALTER TABLE grupo DROP COLUMN qnt_pessoas;
    ALTER TABLE grupo ADD COLUMN codigo CHAR(7);
    SELECT * FROM grupo;
    
	INSERT INTO grupo VALUES
	(default, 'Turma A', '4');
	UPDATE grupo set codigo = "teste" WHERE idGrupo = 1;
    
    SELECT idGrupo FROM grupo WHERE codigo = "123";
    
    ALTER TABLE usuario ADD CONSTRAINT unique_email UNIQUE (email);
    
    SELECT * FRom usuario;
    
    
CREATE TABLE usuarioGrupo (
	fkUsuario INT,
    fkGrupo INT,
    papel varchar(45),
    constraint ck_papel CHECK (papel in ("diretor", "watcher")),
    PRIMARY KEY (fkUsuario, fkGrupo),
    FOREIGN KEY (fkUsuario) REFERENCES usuario (id),
    FOREIGN KEY (fkGrupo) REFERENCES grupo (idGrupo)
);

	SELECT * from usuarioGrupo;
    
    UPDATE usuarioGrupo set papel = "diretor" WHERE fkUsuario = 1;
       UPDATE usuarioGrupo set papel = "diretor" WHERE fkUsuario = 8;

    
    SELECT papel from usuarioGrupo where fkUsuario = 1 AND fkGrupo = 1;
    
	INSERT INTO usuarioGrupo VALUES
    (2, 9, "diretor");

	UPDATE usuarioGrupo set papel = "watcher" WHERE fkUsuario = 4;
    
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

ALTER TABLE filme MODIFY COLUMN poster VARCHAR(255);
DESC filme;

ALTER TABLE filme ADD COLUMN dt_insercao DATE DEFAULT (CURRENT_DATE());

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

SELECT * FROM historico_pontos;

SELECT
    nome,
    YEARWEEK(dataPontuacao, 1) AS semana,
    fkUsuario AS player,
    SUM(pontos) AS total,
    (
        SELECT COUNT(DISTINCT YEARWEEK(dataPontuacao, 1))
        FROM historico_pontos
        WHERE fkGrupo = 1
    ) AS qtdSemanas

FROM usuario u
JOIN historico_pontos hp
ON u.id = hp.fkUsuario
WHERE fkGrupo = 1
GROUP BY nome, semana, fkUsuario
ORDER BY semana ASC, total DESC;

-- SELECT PARA FAZER O RANKING

SELECT
	nome,
    fkUsuario AS player,
    SUM(pontos) AS total
FROM usuario u JOIN historico_pontos hp
ON u.id = hp.fkUsuario
WHERE fkGrupo = 1
GROUP BY fkUsuario
ORDER BY total DESC;

INSERT INTO historico_pontos
(fkUsuario, fkGrupo, pontos, tipo, dataPontuacao)
VALUES
(1, 1, 200, 'curtida_review', '2026-05-12 10:00:00'),
(2, 1, 150, 'curtida_review', '2026-05-12 10:00:00'),
(3, 1, 100, 'curtida_review', '2026-05-12 10:00:00'),
(4, 1, 50,  'curtida_review', '2026-05-12 10:00:00');

CREATE TABLE review (
    idReview INT PRIMARY KEY AUTO_INCREMENT,
    nota DECIMAL (3,1),
    review VARCHAR(200),
	fkFilme INT NOT NULL,
    fkUsuario INT,
	CONSTRAINT chkNota
	CHECK (nota >= 1 AND nota <= 10),
	CONSTRAINT ck_fkfilme
	FOREIGN KEY (fkFilme) REFERENCES filme(idfilme),
	CONSTRAINT ck_fkusuario
	FOREIGN KEY (fkUsuario) REFERENCES Usuario(id)
);

ALTER TABLE review MODIFY COLUMN review varchar(1000);

ALTER TABLE review
ADD CONSTRAINT ck_unique UNIQUE (fkUsuario, fkFilme);

TRUNCATE review;
SELECT * FROM review;

SELECT r.idReview, u.nome, f.nome, r.nota, r.review
FROM review r JOIN filme f
ON r.fkFilme = f.idFilme
JOIN usuario u
ON r.fkUsuario = u.id
WHERE IDfilme = 11;

SELECT r.idReview, u.nome, f.nome, r.nota, r.review, r.fkUsuario, fkFilme
FROM review r JOIN filme f
ON r.fkFilme = f.idFilme
JOIN usuario u
ON r.fkUsuario = u.id
WHERE IDfilme = 12;

DESC historico_pontos;

SELECT * FROM filme;

    SELECT * FROM filme
		WHERE fkGrupo = 1
        ORDER BY idfilme DESC
        LIMIT 1;
        
		  SELECT * FROM filme
        WHERE fkGrupo = 1
        ORDER BY idfilme DESC
        LIMIT 1;
        
        
		SELECT
        nome,
        YEARWEEK(dataPontuacao, 1) AS semana,
        fkUsuario AS player,
        SUM(pontos) AS total,
        (
            SELECT COUNT(DISTINCT YEARWEEK( dataPontuacao, 1))
            FROM historico_pontos
            WHERE fkGrupo = 1
        ) AS qtdSemanas

        FROM usuario u
        JOIN historico_pontos hp
        ON u.id = hp.fkUsuario

        WHERE fkGrupo = 1

        GROUP BY nome, semana, fkUsuario

        ORDER BY semana ASC, total DESC;
        
        INSERT INTO historico_pontos
		(fkUsuario, fkGrupo, pontos, tipo, dataPontuacao)
		VALUES
		(2, 11, 200, 'curtida_review', '2026-05-12 10:00:00');
        
		INSERT INTO historico_pontos
		(fkUsuario, fkGrupo, pontos, tipo, dataPontuacao)
		VALUES
		(1, 11, 250, 'curtida_review', '2026-05-12 10:00:00');
        
		SELECT r.idReview, u.nome as Usuario, f.nome as Filme, r.nota, r.review, r.fkUsuario, fkFilme
        FROM review r JOIN filme f
        ON r.fkFilme = f.idFilme
        JOIN grupo g
        ON g.idGrupo = f.fkGrupo
        JOIN usuario u
        ON r.fkUsuario = u.id
        WHERE idfilme = 12 AND
        fkGrupo = 11;
        
        select * from filme;
        
        SELECT * FROM review;
        
        SELECT g.nome, g.codigo FROM grupo g
        JOIN usuarioGrupo ug ON
        ug.FKgrupo = g.idGrupo
        JOIN usuario u ON
        ug.FKusuario = u.id
        WHERE id = 2;
        
		SELECT r.idReview, f.fkGrupo, f.fkUsuario, f.nome as Filme, r.nota, r.review
        from Review r
        JOIN filme f ON
        r.fkFilme = f.idFilme;
        
        SELECT * FROM Review;
        
         SELECT r.idReview, f.nome as Filme, r.nota, r.review 	
        from Review r
        JOIN filme f ON
        r.fkFilme = f.idFilme
        WHERE r.fkUsuario = 1 AND f.fkGrupo = 1;
        
        SELECT * from filme;
        
        SELECT idFilme, nome, poster,  CONCAT(WEEK(dt_insercao), 'ª semana') AS semana from filme WHERE fkGrupo = 1;
        
        delete from filme where idFilme in (1,2,3,4,5,6,7);
        
		delete from filme where idFilme = 8;
        
     -- testando a parte de fazer aleatorio
    ALTER TABLE usuarioGrupo ADD COLUMN vezes_diretor int;
    SELECT * FROM usuarioGrupo WHERE fkGrupo = 1;
    
    UPDATE usuarioGrupo set papel = "watcher" WHERE fkGrupo = 1;
    UPDATE usuarioGrupo set vezes_diretor = "0" WHERE fkGrupo = 1;
    
   UPDATE usuarioGrupo 
	SET papel = 'diretor'
	WHERE fkGrupo = 1 
	AND fkUsuario = (
    SELECT fkUsuario FROM (
        SELECT fkUsuario
        FROM usuarioGrupo
        WHERE fkGrupo = 1
        ORDER BY vezes_diretor ASC, RAND()
        LIMIT 1
    ) as manter
);
    
	UPDATE usuarioGrupo SET vezes_diretor = vezes_diretor + 1
    WHERE fkGrupo = 1 AND
   papel = "diretor";
    
      SELECT fkUsuario
        FROM usuarioGrupo
        WHERE fkGrupo = 1
        ORDER BY vezes_diretor ASC, RAND()
        LIMIT 1;
    -- -------------------------------------
    select * from usuarioGrupo;
    
    DELETE FROM usuarioGrupo WHERE fkUsuario = 5;
    
    