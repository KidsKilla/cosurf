const connect = () => {
  /**
   * @type {ReturnType<import('socket.io-client').io>}
   */
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

const getSelection = window.getSelection
  ? () => String(window.getSelection())
  : document.getSelection
  ? () => String(document.getSelection())
  : document.selection
  ? () => document.selection.createRange().text
  : () => {
      throw new Error('NO selection')
    }

const main = () => {
  const root = document.getElementById('root')
  const ta = document.createElement('textarea')
  root.appendChild(ta)
  const socket = connect()

  ta.addEventListener('input', (e) => {
    const value = e.target.value
    console.log('TA input', e.data, value)
    socket.emit('edit-input', { value })
  })

  const onCaretChange = (
    /** @type {HTMLElementEventMap['click']|HTMLElementEventMap['focus']|HTMLElementEventMap['keydown']} */ evt,
  ) => {
    const msg = {
      pos: evt.target.selectionStart,
    }
    console.log('TA caret', msg)
    socket.emit('edit-caret', msg)
  }
  'keydown focus click'.split(' ').forEach((evtName) => {
    ta.addEventListener(evtName, onCaretChange)
  })

  ta.addEventListener('select', (e) => {
    const pos = {
      from: e.target.selectionStart,
      to: e.target.selectionEnd,
      text: getSelection(),
    }
    console.log('TA select', pos)
    socket.emit('edit-select', pos)
  })
}

main()
