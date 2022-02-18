--DROP DATABASE UserDB

CREATE DATABASE UserDB
GO

USE UserDB
GO

CREATE TABLE Users(
	id INT IDENTITY(1,1),
	name VARCHAR (50),
	email VARCHAR(50),
	city VARCHAR(50)
)
GO

-- READ
SELECT id, name, email , city from Users
GO

--DROP TABLE USers

-- CREATE
INSERT INTO Users (name, email, city) VALUES ('Scott', 'scott@ef.com', 'Boston'),
                                             ('Adam', 'adam@ef.com', 'Sydney'),
											 ('Tuan', 'Tuan@ef.com', 'Vietnam')
GO

--UPDATE
UPDATE Users SET name = 'Scott Desatnick', email='scott.desatnick@ef.com', city='Bengaluru'
WHERE ID=1

-- DELETE
DELETE FROM Users WHERE ID=2






