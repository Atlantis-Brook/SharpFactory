'use strict';
const Controller = require('egg').Controller;

class JoinController extends Controller{
    async joinForm(){
        const ctx = this.ctx;
        const form = ctx.request.body;
        await ctx.model.NewInformation.create(form);
        return ;
    }
}
module.exports = JoinController;