const robot = require('./middleware/robot');

module.exports = (app) => {
  /**
   * 疑惑点：controller上是怎么添加home/news属性的
   * 目前来看：是取值controller下的文件名
   */
  const { router, controller } = app;

  // console.log(controller, 'controller');

  router.get("/", controller.home.index);
  router.get("/news", controller.news.list);
  
  // 单独对/news/test加中间件robot
  // router.get('/news/test', robot, controller.news.test);


  router.get('/news/test', controller.news.test);

};
