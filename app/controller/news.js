'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    async list() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = 15;
        const {count,rows} = await ctx.model.News.findAndCountAll({
            order:[
                ['id','DESC']
            ],
             offset: (currentPage - 1) * pageSize,
             limit: pageSize
        });
        return {
            count,
            news
        };

    }
}
module.exports = NewsController;