'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const  ctx  = this.ctx;
    console.log(ctx.model);
    const blog = await ctx.model.Blog.findAll({
      order:[
        ['id','DESC']
      ]
    });
    ctx.body = blog;
  }
}

module.exports = HomeController;
