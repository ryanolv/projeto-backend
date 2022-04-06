const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('.'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.post('/corpo', (req, res) => {
    res.send(req.body)
    console.log('resposta enviada...')
})

app.listen(3000, () => {
    console.log('Backend executando...')
})