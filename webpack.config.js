// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/tracker_test.js', // 將要 minify 檔案放置到 src，並將檔案名稱放置到 entry
  output: {
    path: path.resolve(__dirname, 'output'),
  },
  // 如不需要 uglify 可以將 optimization 整個註解掉
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  plugins: [],
}
