'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller{
    async blog(){
        const ctx=this.ctx;
        const blog = await ctx.model.blog.findAll({where:{'id':1}});
        ctx.body=blog;
       // return {count,blog};

    }

}
module.exports=BlogController;
