const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
  ],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@components': path.resolve(__dirname, '../src/presentation/components'),
      '@presentation': path.resolve(__dirname, '../src/presentation'),
      '@style-tokens': path.resolve(
        __dirname,
        '../src/presentation/style-tokens'
      ),
      '@test': path.resolve(__dirname, '../src/presentation/test'),
      '@data': path.resolve(__dirname, '../src/data'),
      '@http': path.resolve(__dirname, '../src/http'),
      '@domain': path.resolve(__dirname, '../src/domain'),
      '@main': path.resolve(__dirname, './.src/main'),
    };

    return config;
  },
};
