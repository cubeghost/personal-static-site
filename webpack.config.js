const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WaitPlugin = require('./WaitPlugin');

const resolve = {
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],
};

const plugins = [];

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
  {
    test: /\.md$/,
    use: {
      loader: 'raw-loader',
    },
  },
];

module.exports = [
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
      new LoadablePlugin({ writeToDisk: true }),
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
      new WaitPlugin('dist/loadable-stats.json'),
      new StaticSiteGeneratorPlugin({
        entry: 'prerender',
        paths: [
          '/',
          '/kidpix',
          '/kidpix/zine',
          '/kidpix/tutorial',
          '/not-found',
        ],
        locals: {},
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'dist/not-found/index.html'),
            to: path.resolve(__dirname, 'dist/404.html'),
          },
        ],
      }),
    ],
  },
];
