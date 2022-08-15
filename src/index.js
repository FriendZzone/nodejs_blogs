const express = require('express')
const path = require('path')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))
console.log(__dirname)
app.engine('hbs', handlebars.engine(
  {extname: '.hbs'}
))
app.set('view engine' , 'hbs')
app.set('views' , path.join(__dirname, 'resources/views'))
app.get('/', (req, res) => {
  res.render('home')
})

app.listen(3000)
