const path = require('path')
const express = require('express')
const app = express()

const PORT = process.env.PORT

const publicPath = path.join(__dirname, '..', 'dist')
app.use(express.static(publicPath))
app.get('*', (request, response) => {
    response.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Run server at ${PORT}`)
})