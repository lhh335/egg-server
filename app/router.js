const robot = require("./middleware/robot");

module.exports = (app) => {
  /**
   * 疑惑点：controller上是怎么添加home/news属性的
   * 目前来看：是取值controller下的文件名
   */
  const { router, controller } = app;

  // console.log(controller, 'controller');

  router.get("index", "/home/index", controller.home.index);

  // 重定向到内部路由
  router.redirect("/", "/home/index", 302);

  // 重定向到外部路由
  // app.router.redirect(url);
  // ================测试=======================

  router.get("/test", controller.test.index);
  // curl 'http://127.0.0.1:7001/test?id=90'

  router.get("/test/:id", controller.test.param);
  // curl 'http://127.0.0.1:7001/test/2'

  router.post("/test/post", controller.test.post);
  // curl -X POST 'http://127.0.0.1:7001/test/post' --data '{"name":"controller"}' --header 'Content-Type:application/json'

  // ================测试=======================
  router.get("/news", controller.news.list);

  // 单独对/news/test加中间件robot
  // router.get('/news/test', robot, controller.news.test);

  router.get("/news/test", controller.news.test);

  // ================路由模块加载=================
  require("./router/news")(app);
  require("./router/home")(app);
  require("./router/test")(app);
  // ================路由模块加载=================
};
