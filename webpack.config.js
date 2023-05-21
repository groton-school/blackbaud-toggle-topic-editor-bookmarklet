const config = require('@battis/webpack/ts/bookmarklet');

module.exports = config({
  root: __dirname,
  title: 'Toggle Topic Editor',
  package: require('./package.json')
});
