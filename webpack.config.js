module.exports = {
  mode: 'production',
  // entry point
  entry: './src/index.js',
  // 出力するパスは絶対パスで書きます
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js'
  },
  // webpack4はlordersではなくなりました
  module: {
    rules: [
      // 拡張子.jsのファイルに対する設定
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
          },
        ]
      },
    ]
  },
}
