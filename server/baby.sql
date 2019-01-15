SET NAMES UTF8;
DROP DATABASE IF EXISTS baby;
CREATE DATABASE baby CHARSET=UTF8;
USE baby;


/**产品家族**/
CREATE TABLE baby_product_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fname VARCHAR(32)
);

/**笔记本电脑**/
CREATE TABLE baby_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  family_id INT,              #所属型号家族编号
  title VARCHAR(128),         #主标题
  price DECIMAL,              #价格
  oprice DECIMAL,
  promise VARCHAR(64),        #服务承诺
  size VARCHAR(64),           #规格
  color VARCHAR(64),           #颜色

  category VARCHAR(32),       #所属分类
  details VARCHAR(1024),      #产品详细说明
  payCount INT,               #已售出的数量
  shelf_time BIGINT,          #上架时间
  is_onsale BOOLEAN           #是否促销中
);

/**笔记本电脑图片**/
CREATE TABLE baby_product_pic(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  product_id INT,              #笔记本电脑编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);

/**用户信息**/
CREATE TABLE baby_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  email VARCHAR(64),
  phone VARCHAR(16),

  avatar VARCHAR(128),        #头像图片路径
  user_name VARCHAR(32),      #用户名,如王小明
  gender INT                  #性别  0-女  1-男
);



/**收货地址信息**/
CREATE TABLE baby_receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE baby_shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  img VARCHAR(32),
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选,确定购买
);

/**用户订单**/
CREATE TABLE baby_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE baby_order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE baby_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);
CREATE TABLE baby_index_today_product(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);


/****首页商品****/
CREATE TABLE baby_index_product(
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








#1:创建表 baby_informations

CREATE TABLE baby_informations(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50),
  ctime DATETIME,
  point INT,
  img_url VARCHAR(255),
  content VARCHAR(255) 
);

INSERT INTO baby_informations VALUES(1,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(2,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(3,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(4,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(5,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(6,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(7,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(8,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(9,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(10,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(11,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(12,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(13,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(14,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(15,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new1.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");
INSERT INTO baby_informations VALUES(16,"周岁内的宝宝消化不良拉肚子怎么办?",now(),0,
"image/new2.jpg","宝宝在周岁之前体质相对较弱,特别是薄弱肠道,一不注意就会拉肚子;那么宝宝消化不良拉肚子");



#货币 小数计算误差
#价格 购物车合计 
#double DECIMAL(10,2)
#严格   将货币转换分单位  1.99 -> 199
#显示  1.99
#3:添加20条记录
#4:查询

#1:创建评论表 39
#   表名 几列 列名
#   baby_comment
#   id        INT        评论编号
#   nid       INT        评论所属新闻编号
#   user_name VARCHAR(25)评论人名称
#   ctime     DATETIME   时间
#   content   VARCHAR(120)内容

CREATE TABLE baby_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  user_name VARCHAR(25),
  ctime DATETIME,
  content VARCHAR(120)
);
#2:添加15条
INSERT INTO baby_comment VALUES(null,1,'dd',now(),'111');
INSERT INTO baby_comment VALUES(null,1,'dd',now(),'112');
INSERT INTO baby_comment VALUES(null,1,'dd',now(),'113');
INSERT INTO baby_comment VALUES(null,2,'dd',now(),'114');
INSERT INTO baby_comment VALUES(null,2,'dd',now(),'115');
INSERT INTO baby_comment VALUES(null,2,'dd',now(),'116');
INSERT INTO baby_comment VALUES(null,3,'dd',now(),'117');
INSERT INTO baby_comment VALUES(null,3,'dd',now(),'118');
INSERT INTO baby_comment VALUES(null,3,'dd',now(),'119');
INSERT INTO baby_comment VALUES(null,4,'dd',now(),'1110');
INSERT INTO baby_comment VALUES(null,4,'dd',now(),'1111');
INSERT INTO baby_comment VALUES(null,4,'dd',now(),'1112');
INSERT INTO baby_comment VALUES(null,5,'dd',now(),'1113');
INSERT INTO baby_comment VALUES(null,5,'dd',now(),'1114');
INSERT INTO baby_comment VALUES(null,5,'dd',now(),'1115');
INSERT INTO baby_comment VALUES(null,5,'dd',now(),'1116');

CREATE TABLE baby_login(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  uid INT,
  uname VARCHAR(25) NOT NULL DEFAULT '',
  upwd  VARCHAR(32) NOT NULL DEFAULT ''
);
INSERT INTO baby_login VALUES(NULL,1,'dingding',md5('123456'));
INSERT INTO baby_login VALUES(NULL,2,'dangdang',md5('123456'));
INSERT INTO baby_login VALUES(NULL,3,'dd',md5('123456'));
INSERT INTO baby_login VALUES(NULL,4,'doudou',md5('123456'));



#baby_shop [id;img_url;name;addr;tel;mtime,star]
CREATE TABLE baby_shop(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  name    VARCHAR(255),
  addr    VARCHAR(255),
  tel     VARCHAR(25),
  mtime   VARCHAR(25),
  star    INT
);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路1','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路2','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路3','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路4','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路5','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路6','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路7','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路8','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路9','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路10','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路11','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路12','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路13','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路14','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路15','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路16','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路17','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路18','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路19','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路20','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路21','万寿路','13999999999','6:00~21:00',85);
INSERT INTO baby_shop VALUES(null,'http://127.0.0.1:3000/img/niu.png','万寿路22','万寿路','13999999999','6:00~21:00',85);




INSERT INTO baby_shoppingcart_item VALUES(null,3,1,"./image/paging_img1.jpg",1,0);
INSERT INTO baby_shoppingcart_item VALUES(null,3,1,"./image/paging_img2.jpg",5,0);
INSERT INTO baby_shoppingcart_item VALUES(null,3,1,"./image/paging_img3.jpg",3,0);
INSERT INTO baby_shoppingcart_item VALUES(null,3,2,"./image/paging_img1.jpg",1,0);
INSERT INTO baby_shoppingcart_item VALUES(null,3,1,"./image/paging_img2.jpg",2,0);







/*******************/
/******数据导入******/
/*******************/
/**产品家族**/
INSERT INTO baby_product_family VALUES
(NULL,'进口奶粉'),
(NULL,'宝宝辅食'),
(NULL,'营养品'),
(NULL,'纸尿裤'),
(NULL,'婴儿湿巾'),
(NULL,'婴儿车'),
(NULL,'婴儿床'),
(NULL,'儿童安全座椅'),
(NULL,'儿童玩具'),
(NULL,'早教书籍'),
(NULL,'孕产育儿书'),
(NULL,'童装'),
(NULL,'童鞋'),
(NULL,'宝宝配饰'),
(NULL,'孕妇装'),
(NULL,'孕妇护肤'),
(NULL,'孕妇用品');


/**笔记本电脑**/
INSERT INTO baby_product VALUES
(NULL,12, '森系小清新四件套', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '130' , '黄色','童装' , '森系小清新四件套' ,1266, 150123456789 ,true),
(NULL,12, '森系小清新四件套', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '145' , '粉色','童装' , '森系小清新四件套' ,1266, 150123456789 ,true),
(NULL,12, '森系小清新四件套', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '150' , '紫色','童装' , '森系小清新四件套' ,1266, 150123456789 ,true),
(NULL,12, '森系小清新四件套', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '170' , '橙色','童装' , '森系小清新四件套' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,7, '木质婴儿床', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', '1.5米' , '黄色','婴儿床' , '婴儿床' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true),
(NULL,14, '粉色系帽子', 200,400, '*退货补运费 *30天无忧退货 *48小时快速退款 *72小时发货', 'L ', '粉色','宝宝配饰' , '帽子' ,1266, 150123456789 ,true);


/**笔记本电脑图片**/
INSERT INTO baby_product_pic VALUES
(NULL, 1, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 2, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 3, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 4, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 5, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 6, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 7, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 8, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 9, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 10, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 11, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 12, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 13, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 14, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 15, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 16, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 17, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 18, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 19, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 20, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 21, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 22, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 23, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 24, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 25, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 26, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 27, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 28, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 29, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 20, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 31, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 32, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 33, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 34, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 35, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 36, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 37, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 38, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 39, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 40, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 41, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 42, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 43, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 44, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 45, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 46, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 47, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 48, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 49, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 50, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 51, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 52, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 53, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 54, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 55, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 56, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 57, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg'),
(NULL, 58, './image/paging_img1.jpg','./image/paging_img1.jpg','./image/paging_img1.jpg'),
(NULL, 59, './image/paging_img2.jpg','./image/paging_img2.jpg','./image/paging_img2.jpg'),
(NULL, 60, './image/paging_img3.jpg','./image/paging_img3.jpg','./image/paging_img3.jpg');



/**用户信息**/
INSERT INTO baby_user VALUES
(NULL, 'dingding', md5('123456'), 'ding@qq.com', '13501234567', 'img/avatar/default.png', '丁伟', '1'),
(NULL, 'dangdang', md5('123456'), 'dang@qq.com', '13501234568', 'img/avatar/default.png', '林当', '1'),
(NULL, 'doudou', md5('123456'), 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1'),
(NULL, 'dd', md5('123456'), 'ya@qq.com', '13501234560', 'img/avatar/default.png', '秦小雅', '0');

/****首页轮播广告商品****/
INSERT INTO baby_index_carousel VALUES
(NULL, 'image/banner1.jpg','轮播广告商品1','detail.html?lid=19'),
(NULL, 'image/banner1.jpg','轮播广告商品2','detail.html?lid=19'),
(NULL, 'image/banner1.jpg','轮播广告商品3','detail.html?lid=19'),
(NULL, 'image/banner1.jpg','轮播广告商品4','detail.html?lid=19');


CREATE TABLE baby_index_more(
  id INT PRIMARY KEY AUTO_INCREMENT,
  lid INT, 
  img_url VARCHAR(255),
  content VARCHAR(120),
  price DECIMAL
);

     
INSERT INTO baby_index_more VALUES
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,1, "/image/more1.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,2, "/image/more2.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,3, "/image/more3.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,4, "/image/more4.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00),
(NULL,5, "/image/more5.jpg","时尚宝宝小黄鸭T恤纯棉耐脏多色可选0-2岁宝宝",100.00);


CREATE TABLE baby_index_hot(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255) 
);


INSERT INTO baby_index_hot VALUES
(NULL, "/image/hot1.png"),
(NULL, "/image/hot2.png"),
(NULL, "/image/hot5.jpg"),
(NULL, "/image/hot6.jpg"),
(NULL, "/image/hot7.jpg"),
(NULL, "/image/hot8.jpg"),
(NULL, "/image/hot9.jpg");


CREATE TABLE baby_index_of(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255) 
);


INSERT INTO baby_index_of VALUES
(NULL, "/image/img12.jpg"),
(NULL, "/image/s_img7.jpg"),
(NULL, "/image/s_img8.jpg"),
(NULL, "/image/s_img9.jpg"),
(NULL, "/image/s_img10.jpg"),
(NULL, "/image/s_img11.jpg");




CREATE TABLE baby_index_today(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  content VARCHAR(120),
  price DECIMAL,
  original INT
);


INSERT INTO baby_index_today VALUES
(NULL, "/image/s_img2.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more3.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more4.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more5.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/s_img2.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more3.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more4.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more5.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/s_img2.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more3.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more4.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more5.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/s_img2.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more3.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more4.jpg","宝宝五彩袜棉质舒服",49.00,99.00),
(NULL, "/image/more5.jpg","宝宝五彩袜棉质舒服",49.00,99.00);












