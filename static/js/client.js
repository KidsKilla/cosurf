// import { io } from 'socket.io-client'

const socket = io()

socket.on('connect', () => {
  console.log('Connected')
})

socket.on('user-connected', ({ userId }) => {
  console.log(`User connected, id: ${userId}`)
})

socket.on('user-disconnected', ({ userId }) => {
  console.log(`User disconnected, id: ${userId}`)
})
