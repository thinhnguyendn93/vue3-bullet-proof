module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require('autoprefixer'),
    require('postcss-assets')({
      loadPaths: ['assets/images', 'assets/fonts'],
      cachebuster: true,
    }),
  ],
};
