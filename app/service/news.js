/**
 * http请求都内置封装好了
 */
const Service = require("egg").Service;

class NewsService extends Service {
  async list(uid = 1) {
    // read config
    // const { serverUrl, pageSize } = this.config.news;

    console.log("走到服务");

    const url = `http://www.lhh-zzr.com:9001/aj/combined?uid=${uid}`;
    const res = await this.ctx.curl(url, { dataType: "json" });

    console.log(res, "请求数据");
    return res.data && res.data.data || [];
  }
}

module.exports = NewsService;
