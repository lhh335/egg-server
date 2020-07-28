const Controller = require("../core/base_controller");

/**
 * Controller 有 class 和 exports 两种编写方式
 */
class HomeController extends Controller {
  async index() {
    // 使用封装好的方法

    // 两者是一样的：this.app/this.ctx.app
    console.log(this.app, "服务实例");
    console.log(this.ctx.app, "服务实例2====");

    this.success({ data: [1, 2, 3, 4, 5, 6] });
  }
}

module.exports = HomeController;
