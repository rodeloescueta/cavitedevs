module.exports = {
  devServer: {
    disableHostCheck: true,
    host: "0.0.0.0",
    port: "9000", //name of port
    public: "0.0.0.0:9000",
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
