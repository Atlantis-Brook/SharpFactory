'use strict';

const Controller = require('egg').Controller;

class BlogController extends Controller {


    async detail() {
        const ctx = this.ctx;
        const blogId = ctx.params.id;
        const blog = await ctx.model.blog.find({
            where: {
                'id': blogId
            }
        });
        await ctx.model.blog.update({
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
            await ctx.model.blog.update({
                'html': html,
                'update_html': update_html,
                'synopsis': synopsis
            }, {
                where: {
                    id: blog.id
                }
            });
        }
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
        return {
            count,
            blog
        };

    }

}
module.exports = BlogController;