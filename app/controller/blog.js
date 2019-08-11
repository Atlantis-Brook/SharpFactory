'use strict';

const Controller = require('egg').Controller;
const sd = require('silly-datetime');
const marked = require('marked');
const moment = require('moment');

class BlogController extends Controller {
    /**
     * blog详情页面数据查询和处理
     */
    async detail() {
        const ctx = this.ctx;
        const blogId = ctx.query.id;
        let blog = await ctx.model.Blog.findAll({
            where: {
                'id': blogId
            }
        });
        await ctx.model.Blog.update({
            'visits': blog[0].visits+1
        }, {
            where: {
                id: blog[0].id
            }
        });
        if (moment(blog[0].update_html).isBefore(blog[0].updated_all) || blog[0].update_html == null) {
            let html = marked(blog[0].markdown);
            let update_html = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
            let rule = new RegExp("<.+?>", "g");
            let synopsis = html.replace(rule, '');
            await ctx.model.Blog.update({
                'html': html,
                'update_html': update_html,
                'synopsis': synopsis
            }, {
                where: {
                    id: blog[0].id
                }
            });
            blog = await ctx.model.Blog.findAll({
                where: {
                    'id': blogId
                }
            });
        }
        ctx.body = blog;
        return blog;
    }
/**
 * blog列表界面数据查询和处理
 */
    async blogList() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = ctx.query.pageSize || 3;
        const {
            count,
            rows
        } = await ctx.model.Blog.findAndCountAll({
            offset: (currentPage - 1) * pageSize,
            limit: pageSize
        });
        for (let index = 0; index < rows.length; index++) {
            rows[index].dataValues.year = rows[index].created_at.getFullYear();
            rows[index].dataValues.month = rows[index].created_at.getMonth();
            rows[index].dataValues.day = rows[index].created_at.getDate();
          }
        ctx.body = {rows:rows,count:count};
        return 0;

    }

}
module.exports = BlogController;