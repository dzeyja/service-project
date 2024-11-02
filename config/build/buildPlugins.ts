import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import { BuildOptions } from './types/config'

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "css/[name].[contenthash].css",
        //     chunkFilename: "css/[id].[contenthash].css",
        // })
    ]
}