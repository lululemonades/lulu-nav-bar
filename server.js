const express = require('express')
const fs = require('fs')
const path = require('path')
var app = express()
app.use(express.static(__dirname))
app.get('/:file', function(req, res) {
  var filename = req.params.file
  fs.readFile(path.join(__dirname, `/${filename}`), (err, data) => {
    if (err) throw new Error(err)
    res.end(data)
  })
})
app.listen(8989)
