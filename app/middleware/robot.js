module.exports = (options, app) => {
  /**
   * options：为在config.default.js文件中配置的该中间的参数
   */

  return async function robotMiddleware(ctx, next) {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some(ua => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      // ctx.body = '访问正确';
      console.log('走到中间件');
      await next();
    }
  }
};

// module.exports = async function robotMiddleware(ctx, next) {
//   const source = ctx.get("user-agent") || "";
//   // const match = options.ua.some((ua) => ua.test(source));
//   const match = false;
//   if (match) {
//     ctx.status = 403;
//     ctx.message = "Go away, robot.";
//   } else {
//     // ctx.body = '访问正确';
//     console.log("走到中间件");
//     await next();
//   }
// };
