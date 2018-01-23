var webpack = require("webpack")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: "dist/assets",
    filename: "bundle.js",
    publicPath: "assets"
  },
  devServer:{
    inline: true,
    contentBase: './dist',
    port: 8088
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=latest,presets[]=stage-0,presets[]=react']
      },
      {
        test: /\.jsonx?$/,
        exclude: /node_modules/,
        loaders: 'json-loader'
      },
      {
        test: /\.cssx?$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!autoprefixer-loader'
      },
      {
        test: /\.scssx?$/,
        exclude: /node_modules/,
        loaders: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      }
    ]
  }
}
