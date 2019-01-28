module.exports = (env, argv) => ({
  resolve: { extensions: ['.js', '.jsx'] },
  devServer: {
    historyApiFallback: true,
  },
  module: require('./webpack/module')(),
  plugins: require('./webpack/plugins')(),
  optimization: require('./webpack/optimisation')(argv),
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});
