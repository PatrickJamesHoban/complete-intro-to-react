const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: [
    'react-hot-loader/patch', // order in entry array is important.
    'webpack-dev-server/client?http://localhost:8080', // need to provide the url it will live on
    'webpack/hot/only-dev-server',
    './js/ClientApp.jsx'
    ],
  // source maps will show you your own code before it was transpiled.
  devtool: 'cheap-eval-source-map',
  output: {
    // path is a node module, making sure it always lands on the correct place, regardless of where it was called from
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  // lets webpack know where you anticipate your bundle being served from...
  devServer: {
    hot: true,
    publicPath: '/public/',
    historyApiFallback: true
  },
  resolve: {
    // order of resolution of extensions.
    extensions: ['.js', '.jsx', '.json']
  },
  // various things you want reported back as you're building.
  stats: {
    colors: true,
    // reasons gives you more useful error output.
    reasons: true,
    // chunks might no longer be used.
    chunks: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),   // provides the ability to insert connectors.
    new webpack.NamedModulesPlugin() // sends down the names of modules you're replacing.
  ],
  // module is an array of rules that webpack will use to apply different loaders to the code.
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        // anything that ends in .js or .jsx run through babel
        test: /\.jsx?$/,
        // could also say loaders and give an array of loaders
        loader: 'babel-loader'
      }
    ]
  }
};
