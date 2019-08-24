/**
 * 存储本地数据（非后台请求数据）
 */

// 头部导航
const topNav = [
  { text: '首&nbsp;&nbsp;页', path: '/home' },
  { text: '关于我们', path: '/about' },
  { text: '为您服务', path: '/service' },
  { text: '博客聚合', path: '/blogs' },
  { text: '新闻事件', path: '/news' },
  { text: '网址导航', path: '/guide' }
]

// 尾部导航
const bottomNav = [
  { text: '版权声明', path: '/' },
  { text: '隐私政策', path: '/' },
  { text: '站点地图', path: '/' },
  { text: '小额打赏', path: '/' },
  { text: '联系我们', path: '/' }
]

// 加载提示
const loadPrompt = {
  loadding: '数据加载中，请稍候...',
  error: '数据加载失败，请刷新重试！',
  noData: '暂无数据！'
}

// 标题信息
const aboutTitle = { mainTitle: 'ABOUT US', subTitle: '关于我们', desc1: '', desc2: '' }
const progectsTitle = { mainTitle: 'OUR PROGECTS', subTitle: '项目展示', desc1: '积累经验', desc2: '在努力中不断成长' }
const servicesTitle = { mainTitle: 'OUR SERVICES', subTitle: '为您服务', desc1: '提供高质量 高效率', desc2: '高性价比的服务' }
const blogsTitle = { mainTitle: 'OUR BLOGS', subTitle: '博客聚合', desc1: '记录', desc2: '是一种习惯' }
const newsTitle = { mainTitle: 'NEWS & EVENTS', subTitle: '新闻与事件', desc1: '新闻随时更新', desc2: '请关注' }
const eventsTitle = { mainTitle: 'OUR EVENTS', subTitle: '工作室事件', desc1: '工作室动态', desc2: '一手掌握' }
const hackerNewsTitle = { mainTitle: 'HACKER NEWS', subTitle: '黑客新闻', desc1: '了解最新资讯', desc2: '掌握最新技术' }
const contactTitle = { mainTitle: 'CONTACT US', subTitle: '留言板', desc1: '期待您的留言', desc2: '我们会尽快地答复' }

// 页面信息
const joinUsPageInfo = {
  info: {
    title:'Join Us',
    breadcrumbs:'首页 > 加入我们',
  },
  slogan:{
    slogan1:'',
    slogan2:''
  }
}
const aboutPageInfo = {
  info: {
    title: 'About Us',
    breadcrumbs: '首页 > 关于我们',
  },
  slogan: {
    slogan1: '',
    slogan2: ''
  }
}
const servicePageInfo = {
  info: {
    title: 'Our Services',
    breadcrumbs: '首页 > 为您服务',
  },
  slogan: {
    slogan1: '',
    slogan2: ''
  }
}
const blogsPageInfo = {
  info: {
    title: 'Our Blogs',
    breadcrumbs: '首页 > 博客聚合',
  },
  slogan: {
    slogan1: '',
    slogan2: ''
  }
}
const newsPageInfo = {
  info: {
    title: 'News & Events',
    breadcrumbs: '首页 > 新闻事件',
  },
  slogan: {
    slogan1: '时刻关注技术前沿，不断努力进步',
    slogan2: ''
  }
}
const guidePageInfo = {
  info: {
    title: 'Website Guide',
    breadcrumbs: '首页 > 网址导航',
  },
  slogan: {
    slogan1: '',
    slogan2: ''
  }
}


// 简短工作室介绍
const minAboutArticle = {
  title: '聚集计算机网络和软件开发爱好者，创建一个面向大学生的学习社区，提高自己！',
  content: [
    'SharpFactory 工作室成立于 2016 年，旨在聚集大学生计算机网络和软件开发爱好者，进行合作学习、钻研 IT 方面相关技术，同时进行相关产品开发活动的非盈利性组织。',
    '工作室人员主要由贵州大学等高校大学生组成，每年面向贵阳各高校招收人才。',
    '且招新无技术门槛要求，由工作室成员组织进行前期技术培训和相关知识补充，以便于后期的学习和实战开发工作。'
  ]
}

// 优势
const advantages = [
  { word: '专注', desc: '专业的团队为您提供专业的服务，我们始终相信只有专注才能成就杰出', iconName: 'icon-chuangxin-' },
  { word: '创新', desc: '我们融合创新理念和前沿技术，量身定制高质量的设计方案，让您在竞争中脱颖而出', iconName: 'icon-chuangxin' },
  { word: '品质', desc: '无论是整体的框架，还是局部的细节，您都能感受到我们对于品质的追求', iconName: 'icon-pinzhi' }
]

// 服务业务
const services = [
  {
    title: '创意网站建设',
    keyWord: ['企业官网建设', '品牌网站全案建设', '电子商务网站', '新闻媒体官网'],
    desc: '针对企业言网、品牌网站全案、电子商务网站、行业门户网站等，提供完美解决方案。UI设计、前端编写、后端实现、服务器部署上线以及网站后期维护全权负责。给您高质量、高效率、高性价比的服务。'
  },
  {
    title: '应用软件开发',
    keyWord: ['手机APP开发', '电脑桌面应用开发', '多平台开发', 'Android、IOS、Windows、MAC'],
    desc: ''
  },
  {
    title: '网站运营维护',
    keyWord: ['系统、插件更新维护', '页面内容修改、添加', '空间&服务器租用', '域名购买'],
    desc: ''
  },
]

// 工作室信息
const ourInfo = {
  email: 'info@example.com',
  address: '贵州省贵阳市花溪区贵安新区数字经济产业园4号0610室'
}

// 版权声明
const copyright = 'Copyright ©2019 SharpFactory All rights reserved.'

// 备案信息
const recordCode = '京 ICP 备10217899 号'

export {
  topNav,
  bottomNav,
  loadPrompt,
  aboutTitle,
  progectsTitle,
  servicesTitle,
  blogsTitle,
  newsTitle,
  eventsTitle,
  hackerNewsTitle,
  contactTitle,
  joinUsPageInfo,
  aboutPageInfo,
  servicePageInfo,
  blogsPageInfo,
  newsPageInfo,
  guidePageInfo,
  minAboutArticle,
  advantages,
  services,
  ourInfo,
  copyright,
  recordCode
}
