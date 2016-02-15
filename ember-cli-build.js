const EmberApp = require('ember-cli/lib/broccoli/ember-addon')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'bower_components/bourbon/app/assets/stylesheets',
        'node_modules/ember-frost-theme/scss',
        'node_modules/ember-frost-css-core/scss'
      ]
    }
  })

  app.import('bower_components/highlightjs/styles/github.css')

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree()
}
