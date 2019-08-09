'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const  ctx  = this.ctx;
    console.log(ctx.model);
    /**
     * blog数据
     */
    const blog = await ctx.model.Blog.findAll({
     where:{
        id:{
          $lte:3
        }
      }
    });
    /**
     * news数据
     */
    const news = await ctx.model.HackerNews.findAll({
      where:{
        id:{
          $lte:3
        }
      }
    });
    /**
     * 项目展示
     */

     /**
      * 关于我们
      */

    ctx.body = {blog:blog,news:news};
    console.log(ctx.status);
    return 0;
  }
}

module.exports = HomeController;
