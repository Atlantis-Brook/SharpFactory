'use strict';
/**
 * Sequelize的操作符定义
 */
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

exports.sequelize = {

    // 单数据库信息配置
    dialect: 'mysql',
    // host
    host: '127.0.0.1',
    // 端口号
    port: '3306',
    // 用户名
    username: 'root',
    // 密码
    password: '539451',
    // 数据库名
    database: 'sharpfactory',
    //开启操作符
    operatorsAliases: operatorsAliases,
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    define: {
      timestamps: false, // 是否启动created_at、updated_at
      freezeTableName: true, //  是否自定义表名
    },
    timezone: '+08:00', // 东八时区
  };

