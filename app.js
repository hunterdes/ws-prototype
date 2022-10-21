const express = require('express')
const enableWs = require('express-ws')

const app = express()
enableWs(app)

app.ws('/echo', (ws, req) => {
    ws.on('message', msg => {
        ws.send(msg)
    })

    ws.on('close', () => {
        console.log('WebSocket was closed')
    })
})

app.get('/users', (req, res) => {
  res.send('Hello World!')
})

app.listen(80)
