const TerserPlugin = require('terser-webpack-plugin');

module.exports = (argv) => {
  return {
    minimize: argv.mode === 'production' ? true : false,
    minimizer: argv.mode === 'production' ? [
      new TerserPlugin({
        test: /\.(js|jsx)(\?.*)?$/i,
        cache: true,
      })
    ] : [],
    nodeEnv: argv.mode,
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  }
}