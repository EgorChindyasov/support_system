const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

const router = require('./routers/routers')

app.use(router)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))