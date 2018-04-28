const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
/**
 * webpack 基础配置
 */
const pubPath = __dirname.split('config')[0];
module.exports = {
	configInfo: {
		context: path.resolve(pubPath, 'src'),
		entry: './index.js',
		// 包(bundle)应该运行的环境
		target: 'web',
		module: {
			rules: [
				{
					test: /\.js[x]?$/,
					exclude: /node_modules/,
					loader: 'babel-loader'
				},
				{
					test: /\.(css|less)$/,
					// exclude: /node_modules/,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
						{ loader: 'less-loader', options: { javascriptEnabled: true } }
					]
					// loader: 'style-loader!postcss-loader!less-loader'
				},
				{
					test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
					exclude: /favicon\.png$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 1,
								name: '[name].[ext]'
							}
						}
					]
				},
				{
					test: /\.(eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]'
							}
						}
					]
				}
			]
		},
		// 不要遵循/打包这些模块，而是在运行时从环境中请求他们
		externals: {
			react: 'React',
			'react-dom': 'ReactDOM'
		},
		resolve: {
			extensions: [ '.jsx', '.js' ],
			alias: {
				Components: path.resolve(pubPath, 'src/components/'),
				Style: path.resolve(pubPath, 'src/style/'),
				Assets: path.resolve(pubPath, 'src/assets/'),
				Pages: path.resolve(pubPath, 'src/pages/'),
				Pub: path.resolve(pubPath, 'src/pub/'),
				Store: path.resolve(pubPath, 'src/store/')
			}
		}
	},
	pubPath: pubPath
};
