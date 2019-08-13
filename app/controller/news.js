'use strict';
const Controller = require('egg').Controller;
class NewsController extends Controller {
    /**
     * Summary:热点新闻列表界面数据查询和处理
     * Parameters:
     *      currentPage:分页查询的当前页码
     *      pageSize:每页显示的条目数量
     *      count:查询总条目数量
     *      rows:查询内容
     * Return:查询结果--Object
     */
    async hotNewsList() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
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
    /**
     * Summary:科技新闻列表界面数据查询和处理
     * Parameters:
     *      currentPage:分页查询的当前页码
     *      pageSize:每页显示的条目数量
     *      count:查询总条目数量
     *      rows:查询内容
     * Return:查询结果--Object
     */
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
    /**
     * Summary:工作室新闻列表界面数据查询和处理
     * Parameters:
     *      currentPage:分页查询的当前页码
     *      pageSize:每页显示的条目数量
     *      count:查询总条目数量
     *      rows:查询内容
     * Return:查询结果--Object
     */
    async ourNewsList(){

    }
}
module.exports = NewsController;