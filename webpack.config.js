module.exports = {
  mode: "development",
  externalsPresets: {
    node: false
  },
  module: {
    parser: {
      javascript: {
        exportsPresence: 'error',
      },
    },
  },
  entry: ['./src/index.js']
}