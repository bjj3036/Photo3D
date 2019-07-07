var express = require('express')
var app = express()
const PORT = 8080

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)


app.use(express.static('public'))

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/public/index.html')
})

app.listen(PORT)