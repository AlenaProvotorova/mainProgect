import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    }

    const fileLoader =  {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    }

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    const cssLoader =  {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        { 
          loader: "css-loader",
          options: {
               modules: {
                 auto: (resPath: string) => Boolean(resPath.includes('.module.scss')),
                 localIdentName: isDev 
                        ? '[path][name]__[local]' 
                        : '[hash:base64:8]'
               },
          }
        },
        "sass-loader",
      ],
    }

    const refreshLoader = {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }

    return [
        svgLoader,
        fileLoader,
        typescriptLoader,
        cssLoader,
        refreshLoader
      ]
}