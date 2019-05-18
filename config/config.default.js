/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1554459182467_3877';

  // add your middleware config here
  config.middleware = ['login'];

  //允许请求
  config.cors = {
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials: true,
  };

  // 网络安全
  config.security = {
    csrf: {
      enable: false,
    },
    domainWhiteList: ['*'],
  };
  return config;

};