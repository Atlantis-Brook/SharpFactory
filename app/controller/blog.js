'use strict';

const Controller = require('egg').Controller;
const sd = require('silly-datetime');
const marked = require('marked');
const moment = require('moment');

class BlogController extends Controller {
    /**
     * Summary:blog详情页面数据查询和处理
     * Parameters:
     *      blogId:需要显示的blog的id
     *      blog:查询结果
     *      html:markdown生成的html格式数据
     *      update_html:更新html数据的时间
     *      rule:正则切割规则
     *      synopsi:简介
     * Return:查询结果--Object
     */
    async detail() {
        const ctx = this.ctx;
        const blogId = Number(ctx.query.id);
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
        for (let index = 0; index < blog.length; index++) {
            blog[index].dataValues.year = blog[index].created_at.getFullYear();
            blog[index].dataValues.month = blog[index].created_at.getMonth()+1;
            blog[index].dataValues.day = blog[index].created_at.getDate();
          }
        ctx.body = {blog};
        return blog;
    }
/**
 * Summary:blog列表界面数据查询和处理
 * Parameters:
 *      currentPage:分页查询的当前页码
 *      pageSize:每页显示的条目数量
 *      count:查询总条目数量
 *      rows:查询内容
 * Return:查询结果--Object
 */
    async blogList() {
        const ctx = this.ctx;
        const currentPage = Number(ctx.query.count) || 1;
        const pageSize = Number(ctx.query.pageSize) || 3;
        const {
            count,
            rows
        } = await ctx.model.Blog.findAndCountAll({
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
     * Summary: blog搜索
     * Parameters:
     *      user:获取搜索的作者
     *      keyWords:获取搜索的内容
     *      currentPage:分页查询的当前页码
     *      pageSize:每页显示的条目数量
     *      count:查询总条目数量
     *      rows:查询内容
     * Return:查询结果--Object
     */
    async blogSearch(){
        const ctx = this.ctx;
        let user,keyWords;
        if (ctx.query.user == "" && ctx.query.key == "") {
            user = ctx.query.user;
            keyWords = ctx.query.key;
        }
        else{
            user = ctx.query.user == "" ? "qiyrowmla;c/,c'skdfhlnchdsuif":ctx.query.user;
            keyWords = ctx.query.key == "" ? "qiyrowmla;c/,c'skdfhlnchdsuif":ctx.query.key;
        }
        const currentPage = Number(ctx.query.count);
        const pageSize = Number(ctx.query.pageSize); 
        const {  
            count,
            rows
        } = await ctx.model.Blog.findAndCountAll({
            where:{
                $or:[{
                    user:{
                        $like:'%'+user+'%'
                    }},
                    {
                    title:{
                        $like:'%'+keyWords+'%'
                    }},
                    {
                    synopsis:{
                        $like:'%'+keyWords+'%'
                    }}]
               
                
                
            },
            offset: (currentPage - 1) * pageSize,
            limit: pageSize
        });
        for (let index = 0; index < rows.length; index++) {
            rows[index].dataValues.year = rows[index].created_at.getFullYear();
            rows[index].dataValues.month = rows[index].created_at.getMonth()+1;
            rows[index].dataValues.day = rows[index].created_at.getDate();
          }
        ctx.body = {rows:rows,count:count};

    }

}
module.exports = BlogController;