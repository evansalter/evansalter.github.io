var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

var hljs = require('highlight.js')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/vue-awesome')],
        options: {
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loaders: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false,
              },
              mozjpeg: {
                quality: 65
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
      {
        test: /\.md$/,
        loaders: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdownit-loader',
            options: {
              highlight: function (str, lang) {
                if (lang && hljs.getLanguage(lang)) {
                  try {
                    return '<pre class="hljs"><div class="code">' +
                          hljs.highlight(lang, str, true).value +
                          '</div></pre>';
                  } catch (__) {}
                }

                return '<pre class="hljs"><div class="code">' + md.utils.escapeHtml(str) + '</div></pre>';
              }
            }
          }
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
