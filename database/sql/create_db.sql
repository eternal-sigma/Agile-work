create database xidianstudents;

ALTER DATABASE xidianstudents CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

DROP TABLE IF EXISTS xidianstudents.student;

CREATE TABLE xidianstudents.student
(
    id        INT(8) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    academy   VARCHAR(100),
    className VARCHAR(50),
    email     VARCHAR(50),
    name      VARCHAR(100)
);

