export const saveGameToStorage = ({ board, turn }) => {
  // guardar aqui partida
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
}

export const resetGameStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const savePlayStorage = () => {
  window.localStorage.setItem('play', true)
}

export const getPlayStorage = () => {
  return window.localStorage.getItem('play')
}

export const resetPlayStorage = () => {
  window.localStorage.removeItem('play')
}

export const getBoardStorage = () => {
  return window.localStorage.getItem('board')
}

export const saveBoardStorage = () => {
  window.localStorage.setItem('board', JSON.stringify(board))
}

export const resetBoardStorage = () => {
  window.localStorage.removeItem('board')
}
