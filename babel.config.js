module.exports = (api) => {
  const isNode = api.caller(caller => caller && caller.target === 'node');
  return {
    presets: [
      ['@babel/preset-env', {
        useBuiltIns: 'entry',
        corejs: 3,
        targets: isNode ? { node: true } : {},
      }],
      '@babel/preset-react',
    ],
    plugins: [
      ['babel-plugin-module-resolver', {
        root: ['./src'],
      }],
      '@babel/plugin-syntax-dynamic-import',
      isNode && 'babel-plugin-dynamic-import-node',
      '@loadable/babel-plugin',
      'babel-plugin-styled-components',
    ].filter(Boolean),
  };
};
