SET NAMES UTF8;
DROP DATABASE IF EXISTS imusic;
CREATE DATABASE imusic CHARSET=UTF8;
USE imusic;

/*歌曲表*/
CREATE TABLE song(
    id INT PRIMARY KEY AUTO_INCREMENT,
    songName VARCHAR(255),
    singer VARCHAR(255),
    rankNo INT,
    rankState INT,
    rankChange INT,
    pic_sm VARCHAR(255),
    pic_md VARCHAR(255)
);
INSERT INTO song VALUES(null,'Samsara','Tungevaag & Raaban',1,1,3,'http://localhost:3000/img/song/song-pic_03.jpg','http://localhost:3000/img/song/album-big.png');
INSERT INTO song VALUES(null,'Love Story','Taylor Swift',2,1,1,'http://localhost:3000/img/song/song-pic_06.jpg','http://localhost:3000/img/song/album-big.png');
INSERT INTO song VALUES(null,'Rekt Togeter','Liben',3,1,5,'http://localhost:3000/img/song/song-pic_08.jpg','http://localhost:3000/img/song/album-big.png');
INSERT INTO song VALUES(null,'Cosmos','Roon_kun',4,0,3,'http://localhost:3000/img/song/song-pic_03.jpg','http://localhost:3000/img/song/album-big.png');
INSERT INTO song VALUES(null,'Feel Alive','Forkyrie',5,0,3,'http://localhost:3000/img/song/song-pic_03.jpg','http://localhost:3000/img/song/album-big.png');
INSERT INTO song VALUES(null,'Impact','Ho2jam',6,0,3,'http://localhost:3000/img/song/song-pic_03.jpg','http://localhost:3000/img/song/album-big.png');

/*推荐页面的表  fid代表类别 1：歌单  2：mv*/
CREATE TABLE recommend(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fid INT,
    title VARCHAR(255),
    singer VARCHAR(255),
    img VARCHAR(255)
);
INSERT INTO recommend VALUES(null,1,'2017欧美上半年最佳单曲Top100','','http://localhost:3000/img/recommend/album-1.jpg');
INSERT INTO recommend VALUES(null,1,'K-on「秋山澪」燃爆你的双耳','','http://localhost:3000/img/recommend/album-2.jpg');
INSERT INTO recommend VALUES(null,1,'日系治愈|想成为一个温柔的人','','http://localhost:3000/img/recommend/album-3.jpg');
INSERT INTO recommend VALUES(null,1,'励志电音|置身于慢慢的正能量宇宙','','http://localhost:3000/img/recommend/album-4.jpg');
INSERT INTO recommend VALUES(null,2,'One More Night','maroon 5','http://localhost:3000/img/recommend/album-5.jpg');
INSERT INTO recommend VALUES(null,2,'Viva la Vida','Coldplay','http://localhost:3000/img/recommend/album-6.jpg');
INSERT INTO recommend VALUES(null,2,'Not Afraid','Eminem','http://localhost:3000/img/recommend/album-7.jpg');
INSERT INTO recommend VALUES(null,2,'I Knew You Were Trouble','Taylor Swift','http://localhost:3000/img/recommend/album-8.jpg');

/*歌单表*/
CREATE TABLE songList(
    id INT PRIMARY KEY AUTO_INCREMENT,
    songName VARCHAR(255),
    singer VARCHAR(255),
    img VARCHAR(255)
);
INSERT INTO songList VALUES(null,'Cagayake!GIRLS','K-on','http://localhost:3000/img/song/song-pic_03.jpg');
INSERT INTO songList VALUES(null,'Utauyo!!MIRACLE','K-on','http://localhost:3000/img/song/song-pic_03.jpg');
INSERT INTO songList VALUES(null,'Cagayake!GIRLS','K-on','http://localhost:3000/img/song/song-pic_03.jpg');
INSERT INTO songList VALUES(null,'Utauyo!!MIRACLE','K-on','http://localhost:3000/img/song/song-pic_03.jpg');