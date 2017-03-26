module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactCFormatter',
      externals: {
        react: 'React'
      }
    }
  }
}
