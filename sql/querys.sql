Create DATABASE AppNotas;
USE AppNotas;

CREATE TABLE Notas(
	id CHAR(20) PRIMARY KEY NOT NULL,
    titulo VARCHAR(40) NOT NULL,
    descripcion VARCHAR(400) NOT NULL,
    importancia ENUM('medium', 'hig', 'no-important')
);