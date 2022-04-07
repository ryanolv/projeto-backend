const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(express.static('.'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use((req, res) => {
    res.send("Chegamos até aqui!")
})

app.post('/corpo', (req, res) => {
    res.send(req.body)
    console.log('resposta enviada...')
})

app.listen(process.env.PORT || 3000)