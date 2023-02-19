
export const savePlayStorage = () => {
  window.localStorage.setItem('play', true)
}

export const getPlayStorage = () => {
  return window.localStorage.getItem('play')
}

export const resetPlayStorage = () => {
  window.localStorage.removeItem('play')
}

export const getPlayersStorage = () => {
  return window.localStorage.getItem('players')
}

export const savePlayersStorage = (players) => {
  window.localStorage.setItem('players', JSON.stringify(players))
}

export const resetPlayersStorage = () => {
  window.localStorage.removeItem('players')
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
