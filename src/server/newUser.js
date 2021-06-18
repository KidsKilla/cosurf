let idCounter = 0

const getRandomRGB = () => {
  var num = Math.round(0xffffff * Math.random())
  var r = num >> 16
  var g = (num >> 8) & 255
  var b = num & 255
  return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

export const createUser = () => ({
  id: String(idCounter++),
  color: getRandomRGB(),
})
