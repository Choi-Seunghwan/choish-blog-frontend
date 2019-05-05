const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',  
  entry: './src/index.js',
  output: {
    publicPath:'/',
    filename: 'bundle.js',
    path: __dirname + '/build'
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
    {
      test: /\.html$/,
      use: [
        "html-loader",
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath:'/',
      template: 'public/index.html',
      favicon: 'public/favicon.ico'
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
	
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};