// https://github.com/Batteredviolet/ej4_examen.git

const express = require('express')
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Express corriendo en el puerto ${PORT}`))

app.set('view engine', 'ejs')

app.use(express.static('public'))

const myArray = [
    {nombre: 'Guitarra', precio: '870'},
    {nombre: 'Teclado', precio: '1300'},
    {nombre: 'Ordenador', precio: '1450'},
    {nombre: 'Mesa escritorio', precio: '450'},
    {nombre: 'Melódica', precio: '100'},
    {nombre: 'Pantalón Gucci', precio: '870'},
    {nombre: 'Máquina afeitar', precio: '70'},
    {nombre: 'Monitor DELL', precio: '650'},
    {nombre: 'Ratón Logitech', precio: '115'},
    {nombre: 'Micrófono sm7b', precio: '325'}
]

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/productos', (req, res)=>{
    res.render('productos', {myArray});
})

app.use((req, res)=>{
    res.status(404).render('404')
})