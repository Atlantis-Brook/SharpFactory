-- 导出 SharpFactory 数据库
DROP DATABASE IF EXISTS `SharpFactory`;
CREATE DATABASE IF NOT EXISTS `SharpFactory`;
USE `SharpFactory`;

-- 导出 user 表
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user`( 
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` BIGINT(120) NOT NULL COMMENT '用户id',
  `user` VARCHAR(120) NOT NULL COMMENT '用户名',
  `avatar` VARCHAR(120) NOT NULL DEFAULT '/usr/img' COMMENT '头像',
  PRIMARY KEY (`id`),
  KEY (`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户基本信息表' AUTO_INCREMENT=1;

-- 导出 user_auths 表
DROP TABLE IF EXISTS `user_auths`;
CREATE TABLE IF NOT EXISTS `user_auths`(
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` BIGINT(120) NOT NULL COMMENT '用户id',
  `identity_type` VARCHAR(120) NOT NULL COMMENT '账号类型',
  `identifier` VARCHAR(120) NOT NULL  COMMENT '标识',
  `credential` VARCHAR(1024) NOT NULL COMMENT '站内凭证',
  `salt` VARCHAR(1024) NOT NULL COMMENT '加密盐',
  `password` VARCHAR(1024) NOT NULL COMMENT '加密密码',
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户登录配置文件表' AUTO_INCREMENT=1;

-- 导出 blog 表
DROP TABLE IF EXISTS `blog`;
CREATE TABLE IF NOT EXISTS `blog`(
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` BIGINT(120) NOT NULL COMMENT '用户id',
  `title` VARCHAR(120) NOT NULL  COMMENT '标题',
  `visits` BIGINT(20) COMMENT '访问量',
  `markdown` TEXT COMMENT 'markdown原文',
  `synopsis` TEXT COMMENT '纯文本形式的大纲',
  `html` TEXT COMMENT 'HTML渲染格式文章',
  `update_html` DATETIME COMMENT 'html字段更新时间',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  `updated_all` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '字段更新时间',
  PRIMARY KEY (`id`),
  KEY (`title`),
  FOREIGN KEY (`user_id`) REFERENCES user(`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='blog表' AUTO_INCREMENT=1;

-- 导出 navigate_user 表
DROP TABLE IF EXISTS `navigate_user`;
CREATE TABLE IF NOT EXISTS `navigate_user`(
  `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user_id` BIGINT(120) NOT NULL COMMENT '用户id',
  `category_id` BIGINT(20) NOT NULL COMMENT '类别id',
  `category` VARCHAR(120) NOT NULL COMMENT '网址类别',
  `site_name` VARCHAR(120) NOT NULL COMMENT '网址名称',
  `site_url` VARCHAR (1024) NOT NULL COMMENT '网址地址url',
  `site_icon` VARCHAR(120) NOT NULL DEFAULT '/usr/icon' COMMENT '网址图标',
  PRIMARY KEY (`id`),
  KEY (`category_id`),
  FOREIGN KEY (`user_id`) REFERENCES user(`user_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='个性化网址导航信息表' AUTO_INCREMENT=1;

-- 导出 navigate_index 表
DROP TABLE IF EXISTS `navigate_index`;
CREATE TABLE IF NOT EXISTS `navigate_index`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `category_id` BIGINT(20) NOT NULL COMMENT '类别id',
  `category` VARCHAR(120) NOT NULL COMMENT '网址类别',
  `site_name` VARCHAR(120) NOT NULL COMMENT '网址名称',
  `site_url` VARCHAR (1024) NOT NULL COMMENT '网址地址url',
  `site_icon` VARCHAR(120) NOT NULL DEFAULT '/usr/icon' COMMENT '网址图标',
  PRIMARY KEY (`id`),
  KEY (`category_id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='网址导航默认信息数据表' AUTO_INCREMENT=1;

-- 导出 hacker_news 表
DROP TABLE IF EXISTS `hacker_news`;
CREATE TABLE IF NOT EXISTS `hacker_news`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` VARCHAR(120) NOT NULL COMMENT '标题',
<<<<<<< HEAD
  `category` BIGINT(120) NOT NULL COMMENT '新闻类别',
  `synopsis` VARCHAR(1024) NOT NULL COMMENT '新闻简介',
  `url` VARCHAR(120) NOT NULL COMMENT '新闻地址',
  `time` VARCHAR(120) NOT NULL COMMENT '发布时间',
=======
  `synopsis` VARCHAR(1024) NOT NULL COMMENT '新闻简介',
  `url` VARCHAR(120) NOT NULL COMMENT '新闻地址',
  `time` DATETIME COMMENT '发布时间',
  PRIMARY KEY (`id`),
  KEY (`title`),
  KEY (`synopsis`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='网络信息新闻数据表' AUTO_INCREMENT=1;

--导出 hot_news 表
DROP TABLE IF EXISTS `hot_news`;
CREATE TABLE IF NOT EXISTS `hot_news`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `title` VARCHAR(120) NOT NULL COMMENT '标题',
  `synopsis` VARCHAR(1024) NOT NULL COMMENT '新闻简介',
  `url` VARCHAR(120) NOT NULL COMMENT '新闻地址',
  `time` DATETIME COMMENT '发布时间',
>>>>>>> console-vata
  PRIMARY KEY (`id`),
  KEY (`title`),
  KEY (`synopsis`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='热点新闻数据表' AUTO_INCREMENT=1;

-- 导出 forum 表
DROP TABLE IF EXISTS `forum`;
CREATE TABLE IF NOT EXISTS `forum`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user` VARCHAR(120) NOT NULL COMMENT '留言名称',
  `message` VARCHAR(1024) NOT NULL COMMENT '留言内容',
  `ip` INT UNSIGNED NOT NULL COMMENT '留言ip',
  `address` VARCHAR(120) NOT NULL COMMENT '留言方地址',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '留言创建时间',
  PRIMARY KEY (`id`),
  KEY (`created_at`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='免账号论坛数据表' AUTO_INCREMENT=1;

-- 导出 undertake_project 表
DROP TABLE IF EXISTS `undertake_project`;
CREATE TABLE IF NOT EXISTS `undertake_project`(
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `user` VARCHAR(120) NOT NULL COMMENT '留案公司或个人名称',
  `phone` BIGINT(120) NOT NULL COMMENT '联系电话',
  `email` VARCHAR(120) NOT NULL COMMENT 'email',
  `address` VARCHAR(120) NOT NULL COMMENT '地址',
  `content` TEXT NOT NULL COMMENT '详细需求',
  `readme` VARCHAR(120) NOT NULL DEFAULT '1' COMMENT '使用前说明',
  `file` TEXT DEFAULT NULL COMMENT '需求文档',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='项目承接数据表' AUTO_INCREMENT=1;
 
