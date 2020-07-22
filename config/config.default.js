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
 */
exports.middleware = ["robot"];

// robot's configurations
exports.robot = {
  ua: [/Baiduspider/i],
};
