CREATE TABLE coach(
   id_coach INT,
   pseudo VARCHAR(50),
   prenom VARCHAR(50),
   nom VARCHAR(50),
   PRIMARY KEY(id_coach)
);


INSERT INTO coach (id_coach, pseudo, prenom, nom) VALUES
(1, 'Striker', 'Yanis', 'Kella'),
(2, 'Hidon', 'Jonas', 'Vraa'),
(3, 'Dylan Falco', 'Dylan', 'Falco'),
(4, 'Carter', 'Alexander', 'Cartwright'),
(5, 'Swiffer', 'Simon', 'Papamarkos'),
(6, 'Nightshare', 'Tomáš', 'Kněžínek'),
(7, 'Reha', 'Rehareha', 'Ramanana'),
(8, 'Melzhet', 'Tomás', 'Campelos Fernandez'),
(9, 'Peter Dun', 'Peter', 'Christopher Dun'),
(10, 'fredy122', 'Simon', 'Payne');

CREATE TABLE compte(
   id_compte INT,
   pseudo VARCHAR(50),
   prenom VARCHAR(50),
   mdp VARCHAR(255),
   nom VARCHAR(50),
   date_naissance DATE,
   nationalite VARCHAR(50),
   adresse VARCHAR(50),
   email VARCHAR(50),
   PRIMARY KEY(id_compte)
);

CREATE TABLE role(
   id_role INT,
   libelle VARCHAR(50),
   PRIMARY KEY(id_role)
);


INSERT INTO role (id_role, libelle) VALUES
(1, 'Top'),
(2, 'Jungle'),
(3, 'Mid'),
(4, 'Bot'),
(5, 'Support');

CREATE TABLE ligue(
   id_ligue INT,
   nom VARCHAR(50),
   region VARCHAR(50),
   PRIMARY KEY(id_ligue)
);


INSERT INTO ligue (id_ligue, nom, region) VALUES
(1, 'LEC', 'Europe'),
(2, 'LCK', 'Corée du Sud'),
(3, 'LPL', 'Chine'),
(4, 'LCS', 'Amérique du Nord');

CREATE TABLE equipe(
   id_equipe INT,
   nom VARCHAR(50),
   champion BOOLEAN,
   classement INT,
   victoire INT,
   defaite INT,
   id_ligue INT NOT NULL,
   id_coach INT NOT NULL,
   PRIMARY KEY(id_equipe),
   UNIQUE(id_coach),
   FOREIGN KEY(id_ligue) REFERENCES ligue(id_ligue),
   FOREIGN KEY(id_coach) REFERENCES coach(id_coach)
);

INSERT INTO equipe (id_equipe, nom, champion, id_ligue, id_coach, classement, victoire, defaite) VALUES
(1, 'Team BDS', FALSE, 1, 1,NULL, NULL, NULL),
(2, 'GIANTX', FALSE, 1, 2,NULL, NULL, NULL),
(3, 'G2 Esports', TRUE, 1, 3,NULL, NULL, NULL),
(4, 'Team Vitality', FALSE, 1, 4,NULL, NULL, NULL),
(5, 'SK Gaming', FALSE, 1, 5,NULL, NULL, NULL),
(6, 'Fnatic', FALSE, 1, 6,NULL, NULL, NULL),
(7, 'Karmine Corp', FALSE, 1, 7,NULL, NULL, NULL),
(8, 'MAD Lions KOI', FALSE, 1, 8,NULL, NULL, NULL),
(9, 'Team Heretics', FALSE, 1, 9,NULL, NULL, NULL),
(10, 'Rogue', FALSE, 1, 10,NULL, NULL, NULL);

CREATE TABLE joueur(
   id_joueur INT,
   pseudo VARCHAR(50),
   prenom VARCHAR(50),
   nom VARCHAR(50),
   date_naissance DATE,
   nationalite VARCHAR(50),
   date_rejoindre DATE,
   id_role INT NOT NULL,
   id_equipe INT,
   PRIMARY KEY(id_joueur),
   FOREIGN KEY(id_role) REFERENCES role(id_role),
   FOREIGN KEY(id_equipe) REFERENCES equipe(id_equipe)
);





INSERT INTO joueur (id_joueur, pseudo, prenom, nom, date_naissance, nationalite, date_rejoindre, id_role, id_equipe) VALUES
(1, 'Adam', 'Adam', 'Maanane', '2001-12-30', 'France', '2022-12-20', 1, 1),
(2, 'Sheo', 'Théo', 'Borile', '2001-07-05', 'France', '2022-12-20', 2, 1),
(3, 'nuc', 'Ilias', 'Bizriken', '2002-10-02', 'France', '2021-12-20', 3, 1),
(4, 'Ice', 'Yoon ', 'Sang-hoon', '2001-04-09', 'Corée du Sud', '2023-12-22', 4, 1),
(5, 'Labrov', 'Labros', 'Papoutsakis', '2002-02-12', 'Grèce', '2022-12-20', 5, 1),
(6, 'Odoamne', 'Andrei ', 'Pascu ', '1995-01-18', 'Roumanie', '2023-12-14', 1, 2),
(7, 'Peach', 'Lee ', 'Min-gyu', '2000-03-28', 'Corée du Sud', '2024-02-21', 2, 2),
(8, 'Jackies', 'Adam', 'Jeřábek', '2004-10-06', 'Tchèque', '2023-12-14', 3, 2),
(9, 'Patrik', 'Patrik ', 'Jírů ', '2000-04-07', 'Tchèque', '2023-12-14', 4, 2),
(10, 'IgNar', 'Lee', 'Dong-geun', '1996-11-20', 'Corée du Sud', '2023-12-14', 5, 2),
(11, 'BrokenBlade', 'Sergen', 'Çelik', '2000-01-19', 'Allemagne', '2022-12-03', 1, 3),
(12, 'Yike', 'Martin', 'Sundelin', '2000-11-11', 'Suède', '2022-12-22', 2, 3),
(13, 'Caps', 'Rasmus', 'Borregaard Winther', '1999-11-17', 'Danemark', '2020-05-06', 3, 3),
(14, 'Hans sama', 'Steven', 'Liv', '1999-09-02', 'France', '2022-12-22', 4, 3),
(15, 'Mikyx', 'Mihael', 'Mehle', '1998-11-02', 'Slovénie', '2022-12-22', 5, 3),
(16, 'Photon', 'Kyeong', 'Gyu-tae', '2001-11-30', 'Corée du Sud', '2022-12-23', 1, 4),
(17, 'Daglas', 'Kacper', 'Dagiel', '2005-10-23', 'Pologne', '2023-12-19', 2, 4),
(18, 'Vetheo', 'Vincent', 'Berrié', '2002-07-26', 'France', '2023-12-19', 3, 4),
(19, 'Carzzy', 'Matyáš', 'Orság', '2002-01-31', 'Tchèque', '2023-12-19', 4, 4),
(20, 'Hylissang', 'Zdravets', 'Iliev Galabov', '1995-04-30', 'Bulgare', '2023-12-19', 5, 4),
(21, 'Irrelevant', 'Joel', 'Miro Scharoll', '2001-10-22', 'Allemagne', '2022-12-15', 1, 5),
(22, 'Isma', 'Ismaïl ', 'Boualem', NULL, 'Belgique', '2023-12-21', 2, 5),
(23, 'Nisqy', 'Yasin ', 'Dinçer ', '1998-07-28', 'BelgiUZ', '2023-12-21', 3, 5),
(24, 'Exakick', 'Thomas', 'Foucou', '2003-09-28', 'France', '2022-12-15', 4, 5),
(25, 'Doss', 'Mads', 'Schwartz', '1999-03-19', 'Danemark', '2022-12-15', 5, 5),
(26, 'Oscarinin', 'Óscar', 'Muñoz Jiménez', '2003-06-11', 'Espagne', '2023-03-02', 1, 6),
(27, 'Razork', 'Iván', 'Martín Díaz', '2000-10-07', 'Espagne', '2021-12-10', 2, 6),
(28, 'Humanoid', 'Marek', 'Brázda', '2000-03-14', 'Tchéque', '2022-01-01', 3, 6),
(29, 'Noah', 'Oh', 'Hyeon-taek', '2001-10-04', 'Corée du Sud', '2023-06-10', 4, 6),
(30, 'Jun', 'Yoon ', 'Se-jun', '2000-08-02', 'Corée du Sud', '2023-12-02', 5, 6),
(31, 'Cabochard', 'Lucas ', 'Simon-Meslet', '1997-04-15', 'France', '2021-05-29', 1, 7),
(32, 'Bo', 'Zhou ', 'Yangbo', '2002-04-22', 'Chine', '2024-01-03', 2, 7),
(33, 'Saken', 'Lucas', 'Fayard ', '1998-11-05', 'France', '2020-12-23', 3, 7),
(34, 'Upset', 'Elias', 'Lipp', '1999-12-16', 'Allemagne', '2024-01-03', 4, 7),
(35, 'Targamas', 'Raphaël', 'Crabbé', '2000-06-30', 'Belgique', '2023-05-23', 5, 7),
(36, 'Myrwn', 'Alex', 'Villarejo ', '2003-06-13', 'Espagne', '2024-01-04', 1, 8),
(37, 'Elyoya', 'Javier', 'Prades', '2000-03-13', 'Espagne', '2020-11-24', 2, 8),
(38, 'Fresskowy', 'Bartłomiej', 'Przewoźnik ', '1999-11-26', 'Pologne', '2024-01-04', 3, 8),
(39, 'Supa', 'David ', 'Garcia', '2000-10-23', 'Espagne', '2024-01-04', 4, 8),
(40, 'Alvaro', 'Alvaro Fernández', 'del Amo', '2003-07-15', 'Espagne', '2024-01-04', 5, 8),
(41, 'Wunder', 'Martin', 'Nordahl Hansen', '1998-11-09', 'Danemark', '2023-12-05', 1, 9),
(42, 'Jankos', 'Marcin', 'Jankowski', '1995-07-23', 'Pologne', '2022-12-10', 2, 9),
(43, 'Perkz', 'Luka', 'Perković', '1998-09-30', 'Croatie', '2023-12-05', 3, 9),
(44, 'Flakked', 'Victor', 'Lirola Tortosa', '2000-12-05', 'Espagne', '2023-05-31', 4, 9),
(45, 'Kaiser', 'Norman ', 'Kaiser', '1998-11-19', 'Allemagne', '2023-12-05', 5, 9),
(46, 'Szygenda', 'Mathias', 'Jensen', '2001-04-14', 'Danemark', '2023-11-22', 1, 10),
(47, 'Finn', 'Finn', 'Wiestål', '1999-06-03', 'Suédois', '2024-02-15', 1, 10),
(48, 'Markoon', 'Mark ', 'van Woensel', '2002-06-28', 'Pays-Bas', '2023-12-19', 2, 10),
(49, 'Larssen', 'Emil ', 'Larsson ', '2000-03-30', 'Suédois', '2023-11-22', 3, 10),
(50, 'Comp', 'Markos', 'Stamkopoulos', '2001-12-20', 'Grèce', '2023-11-22', 4, 10),
(51, 'Zoelys', 'Théo ', 'Le Scornec', '2003-05-16', 'France', '2023-12-20', 5, 10);

CREATE TABLE suivre(
   id_equipe INT,
   id_compte INT,
   PRIMARY KEY(id_equipe, id_compte),
   FOREIGN KEY(id_equipe) REFERENCES equipe(id_equipe),
   FOREIGN KEY(id_compte) REFERENCES compte(id_compte)
);

CREATE TABLE affronter(
   id_equipe INT,
   id_equipe_1 INT,
   resultat VARCHAR(50),
   PRIMARY KEY(id_equipe, id_equipe_1),
   FOREIGN KEY(id_equipe) REFERENCES equipe(id_equipe),
   FOREIGN KEY(id_equipe_1) REFERENCES equipe(id_equipe)
);
