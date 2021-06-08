const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = () =>{
  return {
  plugins: [
    autoprefixer,
    purgecss({
        content: ['index.html','main/main.js'], // content
        css: ['**/*.css'], // css
        output: ['dist/purge/'],
        extractors: [
            {
              extractor: content => content.match(/[A-z0-9-:\/.]+/g) || [],
              extensions: ['html']
            },
            {
              extractor: content => content.match(/[A-z0-9-:\/.]+/g) || [],
              extensions: ['js']
            }
          ]
    })
  ]
}
}