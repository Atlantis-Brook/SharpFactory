'use strict';

/** @type Egg.EggPlugin */

// 跨域请求插件
exports.cors = {
  enable: true,
  package: 'egg-cors',
};
//数据库插件
exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};
//表单样式
exports.validate = {
  enable: true,
  package: 'egg-validate',
};