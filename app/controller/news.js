const Controller = require("egg").Controller;

/**
 * 疑惑点：service.news
 * ctx.service后面的属性，又是已目录为单位
 */
// class NewsController extends Controller {
//   async list() {
//     const ctx = this.ctx;
//     console.log(ctx.isIOS, "isIOS===");
//     const uid = ctx.query.uid || 1;
//     const newsList = await ctx.service.news.list(uid);

//     await ctx.render("/news/list.tpl", { list: newsList });
//   }

//   async test() {
//     const ctx = this.ctx;
//     console.log(ctx, "上下文环境");
//     ctx.body = {
//       code: 10000,
//       msg: "操作成功",
//       data: ["测试成功"],
//     };
//   }
// }

// module.exports = NewsController;





/**
 * 区别于上面的两种写法
 */
exports.list = async (ctx) => {
  // const ctx = this.ctx;
  console.log(ctx.isIOS, "isIOS===");
  const uid = ctx.query.uid || 1;
  const newsList = await ctx.service.news.list(uid);

  await ctx.render("/news/list.tpl", { list: newsList });
};

exports.test = async (ctx) => {
  // const ctx = this.ctx;
  console.log(ctx, "上下文环境");
  ctx.body = {
    code: 10000,
    msg: "操作成功",
    data: ["测试成功"],
  };
};
