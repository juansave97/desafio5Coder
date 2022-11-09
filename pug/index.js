import express from 'express'

let productos = []

const app = express()

app.use(express.urlencoded({extended: true}))

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('formulario', {productos});

});

app.get('/productos', (req, res) => {
    res.render('tabla', {productos});

});

app.post('/productos', (req, res) => {
    productos.push(req.body)
    console.log(req.body)
    console.log(productos)
    res.redirect('/')
});


const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

