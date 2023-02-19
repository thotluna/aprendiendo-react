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

export const saveBoardStorage = (board) => {
  window.localStorage.setItem('board', JSON.stringify(board))
}

export const resetBoardStorage = () => {
  window.localStorage.removeItem('board')
}

export const getTurnStorage = () => {
  return window.localStorage.getItem('turn')
}

export const saveTurnStorage = (turn) => {
  window.localStorage.setItem('turn', turn)
}

export const resetTurnStorage = () => {
  window.localStorage.removeItem('turn')
}

export const saveWinnerStorage = (winner) => {
  window.localStorage.setItem('winner', winner)
}

export const getWinnerStorage = () => {
  return window.localStorage.getItem('winner')
}

export const resetWinnerStorage = () => {
  window.localStorage.removeItem('winner')
}
