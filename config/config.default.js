/**
 * Config 也有 module.exports 和 exports 的写法
 */

/**
 * 增加安全性
 */
exports.keys = "lihaihe";

/**
 * 模版引擎配置
 */
exports.view = {
  defaultViewEngine: "nunjucks",
  mapping: {
    ".tpl": "nunjucks",
  },
};

// service的news配置项
exports.news = {
  pageSize: 5,
  serverUrl: "https://hacker-news.firebaseio.com/v0",
};

// add middleware robot
/**
 * 下面的数组当中的值必须是middleware目录下，各个中间的文件名
 * 这里配置的是全局中间件：如果想要单个配置中间件，则需要在app/router.js当中对每个路由单独配置，或者在中间件的代码中对路由进行区分，在不同的路由下使用中间件
 */
exports.middleware = ["robot"];

// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i],
};

// 关闭csrf安全校验
exports.security = {
  csrf: false,
};

// 配置post请求时，参数的最大长度

exports.bodyParser = {
  jsonLimit: "1mb", // json格式下的最大限制
  formLimit: "1mb", // form格式下的最大限制
};

// 注意：在调整 bodyParser 支持的 body 长度时，如果我们应用前面还有一层反向代理（Nginx），可能也需要调整它的配置，确保反向代理也支持同样长度的请求 body。

// 设置代理(如果设置了代理，则通过ctx获取的ip,host,protocol等都会不同)
exports.proxy = false && true;

// 设置cookie规则
// module.exports = {
//   cookies: {
//     httpOnly: false,
//     // sameSite: 'none|lax|strict',
//   },
// };

// 配置session(获取session:ctx.session; 设置session:ctx.session=val; 清空session: ctx.session=null)
// module.exports = {
//   // key: 'EGG_SESS', // 承载 Session 的 Cookie 键值对名字
//   // maxAge: 86400000, // Session 的最大有效时间
// };
