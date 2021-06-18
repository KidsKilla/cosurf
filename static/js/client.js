// import { io } from 'socket.io-client'

const connect = () => {
  const socket = io()

  socket.on('connect', () => {
    console.log('Connected')
  })

  socket.on('init', (data) => {
    console.log(`Init`, data)
  })

  socket.on('users-change', (room) => {
    console.log(`Users changed`, room)
  })

  return socket
}

const main = () => {
  const root = document.getElementById('root')
  ta = document.createElement('textarea')
  root.appendChild(ta)
  connect()
}

main()
