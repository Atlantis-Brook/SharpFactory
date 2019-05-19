'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const  ctx  = this.ctx;
    console.log(ctx.model);
    const blog = await ctx.model.Blog.findAll({
        where: {
            id: 1
        }
    });
    ctx.body = blog;
  }
}

module.exports = HomeController;
