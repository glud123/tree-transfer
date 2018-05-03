const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BaseData = require('./base');
let { configInfo, pubPath } = BaseData;
const port = '3003';
const host = '127.0.0.1';

module.exports = {
	...configInfo,
	/**
	 * mode 
	 * 
	 * production 生产模式
	 * development 开发模式
	 */
	mode: 'development',
	context: path.resolve(pubPath, 'example/'),
	entry: './index.js',
	output: {
		path: path.join(pubPath, 'dist'),
		filename: '[name].[chunk:8].js', // 生产环境可以使用 chunkhash 文件内容 hash 校验
		// filename: '[name].[hash:8].js',
		libraryTarget: 'umd'
	},
	devServer: {
		contentBase: path.join(pubPath, 'dist'),
		port: port, // 端口号
		host: host, // 主机地址
		inline: true,
		hot: true,
		open: false,
		lazy: false,
		historyApiFallback: {
			rewrites: { from: /./, to: '/404.html' },
			disableDotRule: true
		},
		overlay: {
			warnings: true,
			errors: true
		},
		clientLogLevel: 'error',
		// 开启报错提示
		stats: 'errors-only',
		proxy: {
			'/': {
				// 代理地址
				// target: 'http://172.20.4.84:6565',
				target: 'http://10.11.115.25:80/',
				bypass: function(req, res, proxyOptions) {
					if (req.headers.accept.indexOf('html') !== -1) {
						// console.log('Skipping proxy for browser request.');
						return '/index.html';
					}
				}
			}
			// '/test': {
			// 	// 代理地址
			// 	target: 'http://10.11.115.164:80',
			// 	bypass: function(req, res, proxyOptions) {
			// 		if (req.headers.accept.indexOf('html') !== -1) {
			// 			// console.log('Skipping proxy for browser request.');
			// 			return '/index.html';
			// 		}
			// 	}
			// }
		}
	},

	/**
     * devtool 选项
     * source-map 开发模式
     * eval 生产模式
     */
	devtool: 'source-map',

	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './index.html',
			inject: 'body',
			favicon: 'assets/images/favicon.png',
			cache: true,
			showErrors: true
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].[hash].css',
			chunkFilename: '[id].[hash].css'
		}),
		new LodashModuleReplacementPlugin({
			collections: true,
			paths: true
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: `http://${host}:${port}` })
	]
};
