// import { io } from 'socket.io'

import { createUser } from './newUser.js'

/**
 * @typedef {{ id: string, color: string }} User
 */
/**
 * @type {Record<string, User>}
 */
const ALL_USERS = {}

const onUsersChange = (
  /** @type {import('socket.io').Server} */ socket,
  /** @type {User} */ user,
  /** @type {string} */ action,
) => {
  // emit `user-connected` event to all open connections except this
  const msg = {
    action,
    changedUser: user,
    allUsers: ALL_USERS,
  }
  console.log(`Users changed: ${JSON.stringify(msg)}`)
  socket.broadcast.emit('users-change', msg)
}

/**
 * @param {import('socket.io').Server} io
 */
export const initSocketApp = (io) => {
  io.on('connection', (socket) => {
    const user = createUser()

    console.log('User connected:', user)
    ALL_USERS[user.id] = user
    onUsersChange(socket, user, 'connected')

    socket.emit('init', {
      iam: user,
      others: ALL_USERS,
    })

    // EDIT
    socket.on('edit-caret', (data) => {
      console.log('edit-caret', data)
    })
    socket.on('edit-input', (data) => {
      console.log('edit-input', data)
    })
    socket.on('edit-select', (data) => {
      console.log('edit-select', data)
    })

    socket.on('disconnect', () => {
      delete ALL_USERS[user.id]
      onUsersChange(socket, user, 'disconnect')
    })
  })
}
