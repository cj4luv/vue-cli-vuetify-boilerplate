const path = require('path');

module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  runtimeCompiler: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@layouts': path.join(__dirname, 'src/layouts'),
        '@plugins': path.join(__dirname, 'src/plugins'),
      }
    }
  },
}