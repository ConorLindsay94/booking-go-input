module.exports = () => {
  return {
    test: /\.(js|jsx|ts)$/,
    exclude: /node_modules/,
    loader: 'babel-loader',
    query:
    {
      presets: ['@babel/preset-env', '@babel/preset-react'],
    }
  }
}