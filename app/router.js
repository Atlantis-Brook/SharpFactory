'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/blog/list', controller.blog.blogList);
  router.get('/blog/detail/', controller.blog.detail);
  router.get('/news/hotNewsList/', controller.news.hotNewsList);
  router.get('/news/hackerNewsList/',controller.news.hackerNewsList);
  router.get('news/ourNewsList',controller.news.ourNewsList);
  //router.get('/blog/write',controller.blog.write);
};
