const path = require('path');

module.exports = {
  webpack: {
    config(config) {
      // eslint-disable-next-line
      config.resolve.alias = {
        ...config.alias,
        react: path.resolve(__dirname, './node_modules', 'react'),
      };

      // eslint-disable-next-line
      config.resolve.extensions = config.resolve.extensions || [];
      config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');

      config.module.rules.push({
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      });

      return config;
    },
  },
};
