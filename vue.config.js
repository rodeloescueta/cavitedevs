module.exports = {
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: "9001", //name of port
    public: "0.0.0.0:9001",
    disableHostCheck: true,
    noInfo: true
  },

  transpileDependencies: ["vuetify"],

  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false
    }
  }
  // baseUrl: "/hrd/",
};
