'use strict';
 
const Controller = require('egg').Controller;

class HomeController extends Controller {
     /**
     * Summary:首页数据获取
     * Parameters:
     *      blog:blog板块前三条数据
     *      news:news板块前三条数据
     *      ...
     * Return:查询结果--Object
     */
  async index() {
    const  ctx  = this.ctx;
    let blog = await ctx.model.Blog.findAll({  
     where:{
        id:{
          $lte:3
        }
      }
    });
    for (let index = 0; index < blog.length; index++) {
      blog[index].dataValues.year = blog[index].created_at.getFullYear();
      blog[index].dataValues.month = blog[index].created_at.getMonth()+1;
      blog[index].dataValues.day = blog[index].created_at.getDate();
    }
    /**
     * news数据
     */
    let news = await ctx.model.HackerNews.findAll({
      where:{
        id:{
          $lte:3
        }
      }
    });
    for (let index = 0; index < news.length; index++) {
      news[index].dataValues.year = news[index].time.getFullYear();
      news[index].dataValues.month = news[index].time.getMonth()+1;
      news[index].dataValues.day= news[index].time.getDate();
    }

    /**
     * 项目展示
     */

     /**
      * 关于我们
      */
     
    ctx.body = {blog:blog,news:news};
    return 0;
  }
}

module.exports = HomeController;
