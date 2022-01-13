const express = require("express")
const fs = require('fs')

const app = express()
// engine(extesion, callback)
app.engine('hbs', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'hbs') // register the template engine

app.get('/', function (req, res) {
  // render(archivo de plantilla, {})
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(3000)