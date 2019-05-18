'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.home);
  router.get('/blog',controller.blog.blog);
 // router.get('/blog/detail/:id',controller.blog.detail);
 // router.get('/blog/write',controller.blog.write);
};
