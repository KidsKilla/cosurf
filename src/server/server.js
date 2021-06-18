import express from 'express'
import http from 'http'
import * as socketIo from 'socket.io'
import { initSocketApp } from './app.js'

const app = express()
const server = http.createServer(app)
const io = new socketIo.Server(server)

initSocketApp(io)

app.use(express.static('static'))

app.get('/', (_req, res) => {
  res.sendFile(__dirname + '/static/index.html')
})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
