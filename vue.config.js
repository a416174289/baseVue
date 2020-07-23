const webpack = require('webpack')
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV === "production",
  runtimeCompiler: false,
  productionSourceMap: true,
  integrity: false,
  configureWebpack: {
     resolve: {
      alias: {
        '@a': '@/assets',
        '@c': '@/components',
        '@v': '@/views',
        '@u': '@/utils'
      }
    }
  },
  css: {
    extract: false,
    sourceMap: false,
    modules: false,
    loaderOptions: {}
  },
  devServer: {
    port: 8080,
    host: "0.0.0.0",
    https: false,
    open: true,
    proxy: {
      "/api": {
        target:'http://www.baidu.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },

};
