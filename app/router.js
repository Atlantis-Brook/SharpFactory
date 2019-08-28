'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/blog/list', controller.blog.blogList); 
  router.get('/blog/detail', controller.blog.detail);
  router.get('/blog/search', controller.blog.blogSearch);
  router.get('/news/hackerNewsList',controller.news.hackerNewsList);
  router.get('/news/ourNewsList',controller.news.ourNewsList);
  router.get('/news/ourNewsDetail', controller.news.ourNewsDetails);
  router.post('/join/joinForm', controller.join.joinForm);
  router.post('/message/messageForm',controller.message.messageForm);
  //router.get('/blog/write',controller.blog.write);
};
