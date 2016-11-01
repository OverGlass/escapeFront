exports.config =
  files:
    javascripts:
      joinTo:
        'vendor.js': /^node_modules/
        'main.js': /^app/
      order:
        after: [
          /\.html$/
          /\.css$/
        ]

    stylesheets:
      joinTo: 'app.css'

    templates:
      joinTo: 'main.js'

  plugins:
    sass:
      mode: 'native'
      options:
        includePaths: [
          'node_modules/foundation-sites/scss',
          'node_modules/motion-ui/src'
        ]

