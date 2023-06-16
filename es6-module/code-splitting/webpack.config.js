var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none',
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        //use: ['style-loader', 'css-loader']  //로더는 왼쪽에서 오른쪽으로 적용됨. 순서가 중요 
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      }
    ]
  },
  Plugin: [
    new MiniCssExtractPlugin()
  ],
  
}