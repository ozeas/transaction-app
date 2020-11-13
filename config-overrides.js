const { addWebpackAlias, override } = require('customize-cra');
const path = require('path');

module.exports = override(
  addWebpackAlias({
    ['@app']: path.resolve(__dirname, './src'),
    ['@components']: path.resolve(__dirname, './src/presentation/components'),
    ['@presentation']: path.resolve(__dirname, './src/presentation'),
    ['@style-tokens']: path.resolve(
      __dirname,
      './src/presentation/style-tokens'
    ),
    ['@test']: path.resolve(__dirname, './src/presentation/test'),
    ['@data']: path.resolve(__dirname, './src/data'),
    ['@http']: path.resolve(__dirname, './src/http'),
    ['@domain']: path.resolve(__dirname, './src/domain'),
    ['@main']: path.resolve(__dirname, './src/main'),
  })
);
