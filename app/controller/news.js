'use strict';
const Controller = require('egg').Controller;
const sd = require('silly-datetime');
const marked = require('marked');
const moment = require('moment');
class NewsController extends Controller {
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
        const ctx = this.ctx;
        const currentPage = Number(ctx.query.count) || 1;
        const pageSize = Number(ctx.query.pageSize) || 3;
        const {
            count,
            rows
        } = await ctx.model.OurNews.findAndCountAll({
            order:[
                ['id','DESC']
            ],
            offset: (currentPage - 1) * pageSize,
            limit: pageSize
        });
        for (let index = 0; index < rows.length; index++) {
            rows[index].dataValues.year = rows[index].created_at.getFullYear();
            rows[index].dataValues.month = rows[index].created_at.getMonth()+1;
            rows[index].dataValues.day = rows[index].created_at.getDate();
          }
        ctx.body = {rows:rows,count:count};
        return 0;
    }
    /**
     * Summary:工作室新闻列表界面数据查询和处理
     * Parameters:
     *      newsId:工作室新闻id
     *      ourNews:新闻详细数据
     *      html:markdown生成的html格式数据
     *      update_html:更新html数据的时间
     *      rule:正则切割规则
     *      synopsi:简介
     * Return:查询结果--Object
     */
    async ourNewsDetails(){
        const ctx = this.ctx;
        const newsId = ctx.query.id;
        let ourNews = await ctx.model.OurNews.findAll({
            where: {
                'id': newsId
            }
        });
        await ctx.model.OurNews.update({
            'visits': ourNews[0].visits+1
        }, {
            where: {
                id: ourNews[0].id
            }
        });
        if (moment(ourNews[0].update_html).isBefore(ourNews[0].updated_all) || ourNews[0].update_html == null) {
            let html = marked(ourNews[0].markdown);
            let update_html = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
            let rule = new RegExp("<.+?>", "g");
            let synopsis = html.replace(rule, '');
            await ctx.model.OurNews.update({
                'html': html,
                'update_html': update_html,
                'synopsis': synopsis
            }, {
                where: {
                    id: ourNews[0].id
                }
            });
            ourNews = await ctx.model.OurNews.findAll({
                where: {
                    'id': newsId
                }
            });
        }
        for (let index = 0; index < ourNews.length; index++) {
            ourNews[index].dataValues.year = ourNews[index].created_at.getFullYear();
            ourNews[index].dataValues.month = ourNews[index].created_at.getMonth()+1;
            ourNews[index].dataValues.day = ourNews[index].created_at.getDate();
          }
        ctx.body = {ourNews};
        return ourNews;
    }

}
module.exports = NewsController;