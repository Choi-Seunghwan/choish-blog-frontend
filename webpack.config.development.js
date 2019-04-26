const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',  
  entry: './src/index.js',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
    {
      test: /\.js|jsx?$/,
      exclude: /node_modules/,
      use: [
        {
        loader: 'babel-loader',
        }
      ],
    },
    {
      test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
		  loader: 'url-loader?limit=100000' 
    },
    {
      test: /\.json$/,
		  loader: 'json-loader'
    },
	{
        test: /\.(s*)css$/, // match any .scss or .css file, 
        use: [
          "style-loader", 
          "css-loader", 
          "sass-loader" 
        ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
	
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true
  }
};