'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    async hotNewsList() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        console.log(ctx.query.count);
        const pageSize = Number(ctx.query.pageSize) || 3;
        const {count,rows} = await ctx.model.HotNews.findAndCountAll({
            order:[ 
                ['id','DESC']
            ],
             offset: (currentPage - 1) * pageSize,
             limit: pageSize
        });
        for (let index = 0; index < rows.length; index++) {
            rows[index].dataValues.year = rows[index].time.getFullYear();
            rows[index].dataValues.month = rows[index].time.getMonth()+1;
            rows[index].dataValues.day = rows[index].time.getDate();
          }
        ctx.body = {count:count,rows:rows};
        return 0;
    }

    async hackerNewsList(){
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = Number(ctx.query.pageSize) || 3;
        const {count,rows} = await ctx.model.HackerNews.findAndCountAll({
            order:[ 
                ['id','DESC']
            ],
             offset: (currentPage - 1) * pageSize,
             limit: pageSize
        });
        for (let index = 0; index < rows.length; index++) {
            rows[index].dataValues.year = rows[index].time.getFullYear();
            rows[index].dataValues.month = rows[index].time.getMonth()+1;
            rows[index].dataValues.day = rows[index].time.getDate();
          }
        ctx.body = {count:count,rows:rows};
        return 0;
    }

    async ourNewsList(){

    }
}
module.exports = NewsController;