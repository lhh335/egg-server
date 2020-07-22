const Controller = require("egg").Controller;

/**
 * Controller 有 class 和 exports 两种编写方式
 */
class HomeController extends Controller {
  async index() {
    this.ctx.body = "hello world111";
  }
}

module.exports = HomeController;
