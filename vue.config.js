module.exports = {
  baseUrl: "/",
  lintOnSave: false,

  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },

}
