'use strict';
const Controller = require('egg').Controller;

class MessageController extends Controller{
    async messageForm(){
        const ctx = this.ctx;
        const form = ctx.request.body;
        await ctx.model.MessageBoard.create(form);
        return ;
    }
}
module.exports = MessageController;