const webpack = require('webpack')
const FileManagerPlugin = require('filemanager-webpack-plugin')
function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(),        // 年
    "m+": (date.getMonth() + 1).toString(),     // 月
    "d+": date.getDate().toString(),            // 日
    "H+": date.getHours().toString(),           // 时
    "M+": date.getMinutes().toString(),         // 分
    "S+": date.getSeconds().toString()          // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
    };
  };
  return fmt;
}
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
    },
    plugins: [
      new FileManagerPlugin({  //初始化 filemanager-webpack-plugin 插件实例
        onEnd: {
          delete: [   //首先需要删除项目根目录下的dist.zip
            './XX项目*.zip',
          ],
          archive: [ //然后我们选择dist文件夹将之打包成dist.zip并放在根目录
            { source: './dist', destination: `./XX项目${dateFormat('YYYYmmdd_HHMMSS', new Date)}.zip` },
          ]
        }
      })
    ]
  },
  css: {
    extract: false,
    sourceMap: false,
    modules: false,
    loaderOptions: {}
  },
  devServer: {
    port: process.env.VUE_APP_devServer_port,
    proxy: {
      "/apis": {
        target:
          process.env.VUE_APP_proxy_target +
          (process.env.VUE_APP_proxy_target_port
            ? `:${process.env.VUE_APP_proxy_target_port}`
            : ""),
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/apis": ""
        }
      }
    }
  },

};
