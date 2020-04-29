const path = require('path');

module.exports = {
  webpack: {
    aliases: {
      react: path.resolve(__dirname, './node_modules', 'react'),
    },
  },
};
