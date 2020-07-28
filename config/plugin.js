// 在 Egg 里面，有插件，也有框架，前者还包括了 path 和 package 两种加载模式，那我们应该如何选择呢？
exports.nunjucks = {
  enable: true,
  package: "egg-view-nunjucks",
};

// 用于参数校验
exports.validate = {
  enable: true,
  package: "egg-validate",
};
