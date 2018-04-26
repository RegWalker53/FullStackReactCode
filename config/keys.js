// determine which set of credentila to use
if (process.env.NODE_ENV === 'production') {
  // in production - return Prod keys from process.env
  module.exports = require('./prod');
} else {
  // in dev, return keys in dev.js
  module.exports = require('./dev');
}
