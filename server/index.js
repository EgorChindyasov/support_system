const express = require('express')
const path = require('path')

const app = express()

const PORT = process.env.PORT || 8080

const router = require('./routers/routers')

app.all('/*', (req, res, next) => {

    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type,token, Access-Control-Request-Method, Access-Control-Request-Headers');
    if (req.method === 'OPTIONS') {
      res.sendStatus(204)
    } else {
      next()
    }
  })

app.use(express.json())
app.use('/api', router)

app.get('/', (req, res) => {
    res.send('Hello')
})

app.listen(PORT, () => console.log(`Server started on ${PORT} port`))