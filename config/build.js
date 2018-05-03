const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const BaseData = require('./base');
let { configInfo, pubPath } = BaseData;
module.exports = {
	...configInfo,
	/**
	 * mode 
	 * 
	 * production 生产模式
	 * development 开发模式
	 */
	mode: 'production',
	context: path.resolve(pubPath, 'src'),
	entry: './index.js',
	output: {
		path: path.join(pubPath, 'lib'),
		filename: 'index.js', // 生产环境可以使用 chunkhash 文件内容 hash 校验
		libraryTarget: 'umd'
	},
	plugins: [
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: 'style.css',
			chunkFilename: '[id].css'
		}),
		new LodashModuleReplacementPlugin({
			collections: true,
			paths: true
		}),
		new CleanWebpackPlugin(
			[ '../lib' ],
			{ allowExternal: true } //匹配删除的文件
		)
	]
};
