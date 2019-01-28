module.exports = () => {
	return {
		test: /\.(woff2|woff|ttf|eot)$/,
		exclude: /(node_modules)/,
		loader: 'file-loader',
		options: {
			name: './fonts/[name].[ext]'
		}
	}
}