const express = require('express')
const path = require('path')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

const server = app.listen(80, () => {
    console.log(`Application works on port: ${server.address().port}`)
})

const io = require('./socket')(server)
const Controllers = require('./controllers')(io)

app.post('/lane', Controllers.Socket)

app.post('/set', Controllers.Setting)

app.use(express.static(path.resolve(__dirname, `./dist`)))
app.get('*', (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, `./dist/index.html`), 'utf-8');
    res.send(html);
})
