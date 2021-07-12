let path = require("path");
module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      if (process.env.DEMO) {
        args[0].template = "../backend/public/index.html";
      }
      return args;
    });
  },
};
