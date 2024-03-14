require('dotenv').config();
const express = require('express')
const  app = express()



app.get('/', (req, res) => {
    res.send(`<h1>Hello World!</h1>`);
})

app.get('/twitter', (req, res) => {
    res.send("Sobhan")
})
app.get('/login', (req, res)=> {
    res.send('<h1>Please login at sobhan.com</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})