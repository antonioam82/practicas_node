const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"))

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})

app.get('/',(req,res) => {
    res.send('Mi respuesta desde express')})

app.listen(port, () => {
    console.log('Servidor en escucha')
})
