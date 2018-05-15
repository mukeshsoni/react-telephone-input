const path = require('path')

module.exports = {
  webpack: {
    aliases: {
      react: path.resolve(__dirname, './node_modules', 'react')
    }
  },
  babel: {
    env: {
      production: {
        plugins: ['babel-plugin-remove-data-test-id-attribute']
      }
    }
  }
}
