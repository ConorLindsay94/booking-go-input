const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
	return {
		test: /\.(css|scss|sass)$/,
		use: [
			MiniCssExtractPlugin.loader,
			{ loader: 'css-loader', options: { minimize: true } },
			'postcss-loader',
			'sass-loader'
		]
	}
}