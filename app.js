// /**
//  * 自定义想参数校验规则
//  *
//  */
// app.validator.addRule("json", (rule, value) => {
//   try {
//     JSON.parse(value);
//   } catch (err) {
//     return "must be json string";
//   }
// });

module.exports = (app) => {
  app.once("server", (server) => {
    // websocket
    console.log("服务启动", server);
  });
  app.on("error", (err, ctx) => {
    // report error
    console.log("服务错误");
  });
  app.on("request", (ctx) => {
    // log receive request
    console.log("请求接口");
  });
  app.on("response", (ctx) => {
    // ctx.starttime is set by framework
    const used = Date.now() - ctx.starttime;
    console.log("响应数据");
    // log total cost
  });
};
