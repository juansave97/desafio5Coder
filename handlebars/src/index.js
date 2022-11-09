const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const handlebarsConfig = {
  // extname: 'hbs',
  // defaultLayout: 'index.hbs'
  defaultLayout: 'index.handlebars'
}

app.use(express.urlencoded({ extended: true }))
app.engine('handlebars', exphbs(handlebarsConfig))

app.set('view engine', 'handlebars')

app.set('views', '../views')

let productos = []

app.get('/', (req, res) => {
  res.render('formulario', { productos });
});

app.get('/productos', (req, res) => {
  res.render('tabla', { productos });
});

app.post('/productos', (req, res) => {
  productos.push(req.body)
  console.log(productos)
  res.redirect('/')
});

const PORT = 8080
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Error en servidor ${error}`))