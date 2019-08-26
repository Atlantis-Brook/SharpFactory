/**
 * 存储后台请求 api 地址信息
 */

// 后台数据接口地址
const baseUrl = '//127.0.0.1:7001/'

// 博客列表数据
const blogList = '/blog/list'
//黑客新闻列表数据
const hackerNewsList = '/news/hackerNewsList'
//热点新闻列表数据
const hotNewsList = '/news/hotNewsList'
//工作室新闻列表数据
const ourNewsList = '/news/ourNewsList'
//blog详情数据
const blogDetails = '/blog/detail'
//blog搜索
const blogSearch = '/blog/search'
//ourNew详情数据
const ourNewsDetails = '/news/ourNewsDetail'
//join表单提交
const joinForm = '/join/joinForm'

export { baseUrl, blogList, ourNewsList, hotNewsList, hackerNewsList, blogDetails, ourNewsDetails, joinForm, blogSearch}
