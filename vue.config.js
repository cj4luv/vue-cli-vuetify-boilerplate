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
        '@views': path.join(__dirname, 'src/views'),
      }
    },
    module: {
      rules: [
        {
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        }
      ]
    },
  },
}