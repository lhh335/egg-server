/**
 * 获取查询字符串
 */
exports.index = async (ctx) => {
  // ctx.body = `search: ${ctx.query.id}`;

  // 注意：ctx.queries可以用来获取重复的key，然后组合为数组来展示
  // 例如：key=as&id=90&id=12&id=77这样的query需要用ctx.queries来获取，会得到如下值
  // { key: ['as'], id: ['90','12','77'] }
  if (ctx.query.type === "outer") {
    // 路由重定向到外部
    ctx.redirect("https://www.lhh-zzr.com");
  }
};

/**
 * 获取动态参数
 */
exports.param = async (ctx) => {
  ctx.body = `search: ${ctx.params.id}`;
};

/**
 * 模拟post请求
 */
exports.post = async (ctx) => {
  console.log(ctx.request.body, "请求参数post");

  /**
   * 内置的bodyParser插件会自动解析post传递过来的参数，默认最大传输数据为100kb; 对bodyParser的设置可在config/config.default.js进行配置
   */
  // 可通过ctx.validate({})来编写参数校验规则
  // 例如：
  /**
   * ctx.validate({
   *  password: { // 字段名
   *    type: 'password', // 数据类型
   *    compare: 'old_password' // 和哪个字段做比较
   *  },
   *  account: {
   *    type: 'email'
   *  }
   * })
   */
  try {
    // 内置校验规则
    // ctx.validate({
    //   password: {
    //     type: 'password',
    //     compare: 'old_password'
    //   }
    // })

    // 自定义校验规则
    const rule = { test: "json" };
    ctx.validate(rule, ctx.query);
    ctx.body = {
      data: ctx.request.body,
    };
  } catch (e) {
    ctx.body = {
      msg: "参数有误！",
    };
  }
};
