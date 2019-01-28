module.exports = () => {
  return {
    rules: [
      require('./modules/eslint')(),
      require('./modules/babel')(),
      require('./modules/images')(),
      require('./modules/svgs')(),
      require('./modules/fonts')(),
      require('./modules/styles')(),
      require('./modules/eslint')(),
      require('./modules/html')()
    ]
  }
};