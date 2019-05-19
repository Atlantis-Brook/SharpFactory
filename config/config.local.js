'use strict';
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