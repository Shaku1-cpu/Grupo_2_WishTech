const express = require("express");
const { get } = require("http");
const app = express();
const path = require("path")
const PORT = 3000;

app.use(express.static("public"))

app.listen(PORT,() => console.log(`Server listening on port ${PORT}`))


app.get("/home", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})
app.get("/sobre-nosotros", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/sobre-nosotros.html"))
})
app.get("/iniciar-sesion", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
})
app.get("/carrito-de-compras", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productCart.html"))
})
app.get("/registrarme", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
})
app.get("/detalles-de-producto", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/productDetail.html"))
})
