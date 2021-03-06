const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = () => {
	return {
		test: /\.html$/,
		use: [{ loader: 'html-loader', options: { minimize: true } }]
	}
}