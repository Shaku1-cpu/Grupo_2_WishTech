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
