const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
	output: {
		path: path.join(pubPath, 'dist/workbench'),
		filename: '[name].[chunkhash:8].js', // 生产环境可以使用 chunkhash 文件内容 hash 校验
		libraryTarget: 'umd'
	},
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
			filename: '[name].[chunkhash:8].css',
			chunkFilename: '[id].[chunkhash:8].css'
		}),
		new LodashModuleReplacementPlugin({
			collections: true,
			paths: true
		}),
		new CleanWebpackPlugin(
			[ '../dist' ],
			{ allowExternal: true } //匹配删除的文件
		),
		new CopyWebpackPlugin([ { from: pubPath + '/src/assets', to: './assets' } ])
	]
};
