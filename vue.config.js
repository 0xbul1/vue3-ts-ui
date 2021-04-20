module.exports = {
  publicPath: './',
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: ['./src/assets/styles/variable.scss'],
      // patterns: ['./src/assets/styles/globe/**']
    }
  }
}
