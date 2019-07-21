'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/blog/list', controller.blog.blogList);
  router.get('/blog/detail/:id', controller.blog.detail);
  router.get('/news/list', controller.news.list);
  //router.get('/blog/write',controller.blog.write);
};