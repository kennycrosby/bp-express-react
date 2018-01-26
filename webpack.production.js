const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// const stylesheetsLoaders = [
//   { loader: 'css-loader' },
//   { loader: 'postcss-loader' }
// ];

const stylesheetsLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: true,
      localIdentName: '[path]-[local]-[hash:base64:3]',
      sourceMap: true
    }
  },
  { loader: 'postcss-loader' }
];

const stylesheetsPlugin = new ExtractTextPlugin('bundle-[hash:6].css');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const copyWebpackPluginConfig = new CopyWebpackPlugin([
  { from: 'src/public-assets' },
  { from: 'src/assets', to: 'assets' }
], {
  ignore: []
});

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'development' || 'false')),
  'process.env': {
    NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'production')
  }
});

const uglifyPlugin = new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } });
const compressionPlugin = new CompressionPlugin();

module.exports = {
  entry: './src/index.js',
  
  output: {
    filename: 'bundle-[hash:6].js',
    path: path.resolve(__dirname, 'dist')
  },
  
  devtool: 'cheap-source-map',

  plugins: [
    stylesheetsPlugin,
    htmlWebpackPlugin,
    definePlugin,
    uglifyPlugin,
    compressionPlugin,
    copyWebpackPluginConfig
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [...stylesheetsLoaders, {
            loader: 'sass-loader'
          }]
        })
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?name=/assets/images/[name]-[hash].[ext]'
      }
    ]
  }
};

