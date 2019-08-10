'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    async hotNewsList() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = 3;
        const {count,rows} = await ctx.model.HotNews.findAndCountAll({
            order:[ 
                ['id','DESC']
            ],
             offset: (currentPage - 1) * pageSize,
             limit: pageSize
        });
        ctx.body = {count:count,rows:rows};
        return 0;
    }

    async hackerNewsList(){
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = 3;
        const {count,rows} = await ctx.model.HotNews.findAndCountAll({
            order:[ 
                ['id','DESC']
            ],
             offset: (currentPage - 1) * pageSize,
             limit: pageSize
        });
        ctx.body = {count:count,rows:rows};
        return 0;
    }

    async ourNewsList(){

    }
}
module.exports = NewsController;