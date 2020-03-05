module.exports = {
  plugins: ['@babel/plugin-proposal-class-properties'],
  presets: [
    '@babel/preset-react',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
