module.exports = (app) => {
  const { router, controller } = app;
  router.get("index", "/home/index", controller.home.index);

  // 重定向到内部路由
  router.redirect("/", "/home/index", 302);
};
