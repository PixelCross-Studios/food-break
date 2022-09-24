const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const appDirectory = path.resolve(__dirname, '../');

// Babel loader configuration
const babelLoaderConfiguration = {
  test: /\.(tsx|jsx|ts|js)?$/,
  // Excluding node_modules from transpiling except for a select few packages.
  exclude: [
    {
      and: [
        path.resolve(appDirectory, 'node_modules'),
        path.resolve(appDirectory, 'ios'),
        path.resolve(appDirectory, 'android'),
      ],
      not: [
        path.resolve(appDirectory, 'node_modules/react-native-uncompiled'),
        // path.resolve(appDirectory, 'node_modules/react-native-reanimated'),
      ],
    },
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
      presets: ['module:metro-react-native-babel-preset'],
      plugins: ['react-native-web'],
    },
  },
};

// Image loader configuration
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      esModule: false,
    },
  },
};

// File loader configuration
const fileLoaderConfiguration = {
  test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'fonts/',
      },
    },
  ],
};

module.exports = argv => {
  return {
    mode: 'development',
    entry: path.resolve(appDirectory, 'web/index.web.js'),
    output: {
      clean: true,
      path: path.resolve(appDirectory, 'web/dist'),
      filename: '[name].[chunkhash].js',
      sourceMapFilename: '[name].[chunkhash].map',
      chunkFilename: '[id].[chunkhash].js',
    },
    resolve: {
      alias: {
        'react-native$': 'react-native-web',
      },
      extensions: [
        '.web.js',
        '.js',
        '.web.ts',
        '.ts',
        '.web.jsx',
        '.jsx',
        '.web.tsx',
        '.tsx',
      ],
    },
    module: {
      rules: [
        babelLoaderConfiguration,
        imageLoaderConfiguration,
        fileLoaderConfiguration,
      ],
    },
    plugins: [
      // Fast refresh plugin
      new ReactRefreshWebpackPlugin(),

      // Plugin that takes public/index.html and injects script tags with the built bundles
      new HtmlWebpackPlugin({
        template: path.resolve(appDirectory, 'web/public/index.html'),
      }),

      // Defines __DEV__ and process.env as not being null
      new webpack.DefinePlugin({
        __DEV__: argv.mode !== 'development' || true,
        process: {env: {}},
      }),
    ],
    optimization: {
      // Split into vendor and main js files
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
    },
  };
};
