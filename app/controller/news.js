const Controller = require('egg').Controller;

/**
 * 疑惑点：service.news
 * ctx.service后面的属性，又是已目录为单位
 */
class NewsController extends Controller {
  async list() {
    const ctx = this.ctx;
    const page = ctx.query.page || 1;
    const newsList = await ctx.service.news.list(page);
    console.log(newsList, '请求的数据列表');
    await ctx.render('/news/list.tpl', { list: newsList });
  }

  async test() {
    const ctx = this.ctx;
    console.log(ctx, '上下文环境');
    ctx.body = {
      code: 10000,
      msg: '操作成功'
    }
  }
}

module.exports = NewsController;