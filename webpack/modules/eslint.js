module.exports = () => {
  return {
    test: /\.js$/,
    enforce: 'pre',
    use: [{
      loader: 'eslint-loader',
      options: {
        configFile: './.eslintrc',
        cache: false,
      }
    }],
    exclude: '/node_modules/'
  }
}