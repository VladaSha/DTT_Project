module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.jsx?$/, // both .js and .jsx
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true
        }
      },
      {
        test: /\.ts$/,
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
          quotes: [2, 'single', { avoidEscape: true }]
        }
      },
      {
        test: /\.vue$/,
        loader: 'eslint-loader',
        include: path.resolve(process.cwd(), 'src'),
        enforce: 'pre',
        options: {
          fix: true,
          quotes: [2, 'single', { avoidEscape: true }]
        }
      }
    ]
  }
};
