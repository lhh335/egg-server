/**
 * 封装一些基础的方法
 * 例如：成功响应，失败响应等等
 */

const { Controller } = require("egg");
class BaseController extends Controller {
  /**
   * 获取用户ID
   */
  get user() {
    return this.ctx.session.user;
  }

  /**
   * 成功响应
   */
  success(data) {
    this.ctx.body = {
      code: 10000,
      msg: "操作成功",
      ...data,
    };
  }

  /**
   * 404
   */
  notFound(msg) {
    msg = msg || "not found";
    this.ctx.throw(404, msg);
  }
}
module.exports = BaseController;
