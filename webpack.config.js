const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

module.exports = () => {
  const resolve = {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  };

  const plugins = [
    new LoadablePlugin({ writeToDisk: true }),
  ];

  const rules = [
    {
      test: /\.jsx?$/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.svg$/,
      use: {
        loader: '@svgr/webpack',
        options: {
          titleProp: true,
        },
      },
    },
    {
      test: /\.(woff2?|ttf|otf|eot)$/,
      use: {
        loader: 'file-loader',
      },
    },
    {
      test: /\.(png|jpe?g|gif|ico)$/,
      use: {
        loader: 'file-loader',
      },
    },
  ];

  return [
    {
      entry: {
        client: path.resolve(__dirname, 'src/client.js'),
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/',
      },
      devServer: {
        hot: true,
        port: 3000,
        contentBase: './dist',
        historyApiFallback: true,
      },
      resolve: resolve,
      module: {
        rules: [...rules],
      },
      plugins: [
        ...plugins,
      ],
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
            },
          },
        },
      },
    },
    {
      target: 'node',
      entry: {
        prerender: path.resolve(__dirname, 'src/prerender.js'),
      },
      output: {
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs2',
        publicPath: '/',
      },
      resolve: resolve,
      module: {
        rules: [...rules],
      },
      plugins: [
        ...plugins,
        new StaticSiteGeneratorPlugin({
          entry: 'prerender',
          paths: ['/'],
          locals: {},
        }),
      ],
    },
  ];
};
