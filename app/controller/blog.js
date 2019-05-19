'use strict';

const Controller = require('egg').Controller;
const sd = require('silly-datetime');
const marked = require('marked');
const moment = require('moment');

class BlogController extends Controller {


    async detail() {
        const ctx = this.ctx;
        const blogId = ctx.params.id;
        let blog = await ctx.model.Blog.findAll({
            where: {
                'id': blogId
            }
        });
        await ctx.model.Blog.update({
            'visits': blog.visits + 1
        }, {
            where: {
                id: blog.id
            }
        });
        if (moment(blog.update_html).isBefore(blog.updated_all)) {
            let html = marked(blog.markdown);
            let update_html = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
            let rule = new RegExp("<.+?>", "g");
            let synopsis = html.replace(rule, '');
            await ctx.model.Blog.update({
                'html': html,
                'update_html': update_html,
                'synopsis': synopsis
            }, {
                where: {
                    id: blog.id
                }
            });
            blog = await ctx.model.Blog.find({
                where: {
                    'id': blogId
                }
            });
        }
        ctx.body = blog;
        return blog;
    }



    async blogList() {
        const ctx = this.ctx;
        const currentPage = ctx.query.count || 1;
        const pageSize = 15;
        const {
            count,
            blog
        } = await ctx.model.blog.findAndCount({
            offset: (currentPage - 1) * pageSize,
            limit: pageSize
        });
        ctx.body = blog;
        ctx.body = count;
        return {
            count,
            blog
        };

    }

}
module.exports = BlogController;