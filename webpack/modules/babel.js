module.exports = () => {
  return {
    test: /\.(js|jsx|ts)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query:
    {
      presets: ['env'],
    }
  }
}