const path = require('path');
module.export = {
  // entry: path.join(__dirname, 'core.js'),
  entry:'bin/core.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'core.js',
  },
  mode: 'development'
}