SET NAMES UTF8;
DROP DATABASE IF EXISTS ash;
CREATE DATABASE ash CHARSET=UTF8;
USE ash;
CREATE TABLE ash_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	email VARCHAR(64),
	phone VARCHAR(16) NOT NULL UNIQUE,
	avatar VARCHAR(128),
	user_name VARCHAR(32),
	gender BOOL
	);
CREATE TABLE ash_receiver_assress(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	receiver VARCHAR(16),
	province VARCHAR(16),
	city VARCHAR(16),
	country VARCHAR(16),
	address VARCHAR(128),
	cellphone VARCHAR(16),
	fixedphone VARCHAR(16),
	postcode CHAR(6),
	tag VARCHAR(16),
	is_default BOOLEAN
	);
CREATE TABLE ash_shopping_cart(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	product_id INT,
	count INT	
	);
CREATE TABLE ash_order(
	aid INT PRIMARY KEY AUTO_INCREMENT,
	user_id INT,
	adress_id INT,
	status INT,
	order_time BIGINT,
	pay_time BIGINT,
	deliver_time BIGINT,
	received_time BIGINT
	);
CREATE TABLE ash_order_detail(
	did INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	product_id INT,
    count INT
);
CREATE TABLE ash_laptop_family(
	fid INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(32)
);
CREATE TABLE am_laptop(
	lid INT PRIMARY KEY AUTO_INCREMENT,
	family_id INT,
	product_id INT,
	title VARCHAR(128),
	subtitle VARCHAR(128),
	price DECIMAL(10,2),
	promise VARCHAR(64),
	spec VARCHAR(64),
	name VARCHAR(32),
	os VARCHAR(32),
	memory VARCHAR(32),
	resolution VARCHAR(32),
	video_card VARCHAR(32),
	cpu VARCHAR(32),
	video_memory VARCHAR(32),
	cateboy VARCHAR(32),
	disk VARCHAR(32),
	details VARCHAR(1024),
	shelf_time BIGINT,
	sold_count INT,
	is_onsole BOOLEAN
); 
CREATE TABLE ash_laptop_pic(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	laptop_id INT,
	sm VARCHAR(128),
	md VARCHAR(128),
	lg VARCHAR(128)
); 
CREATE TABLE ash_index_carousel(
	cid INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(128),
	title VARCHAR(64),
	href VARCHAR(128)
);
CREATE TABLE ash_index_product(
	pid INT PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(64),
	details VARCHAR(128),
	pic VARCHAR(128),
	price DECIMAL(10,2),
	href VARCHAR(128),
	seq_recommended TINYINT,
	seq_new_arrival TINYINT,
	seq_top_sale TINYINT
); 
INSERT INTO ash_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'yaya', '123456', 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');




















