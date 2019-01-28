const svgStore = require('webpack-svgstore-plugin');

module.exports = () => {
	return {
		test: /\.(jpe?g|png|gif)$/i,
		use: [
			{
				loader: 'url-loader',
				options: {
					name: './img/[name].[ext]',
					limit: 10000
				}
			},
			{
				loader: 'img-loader'
			}
		]
	}
}