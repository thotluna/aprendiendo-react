import { useState, useEffect } from 'react'
import { checkWinnerFrom } from '../logic/board'
import { getBoardStorage, getWinnerStorage, resetBoardStorage, resetWinnerStorage, saveBoardStorage } from '../logic/storage'

export function useBoard () {
  const [board, setBoard] = useState(() => {
    return JSON.parse(getBoardStorage()) ?? Array(9).fill(null)
  })

  const [winner, setWinner] = useState(getWinnerStorage() || null)

  const resetBoard = () => {
    resetBoardStorage()
    resetWinnerStorage()
    setWinner(null)
    setBoard(Array(9).fill(null))
  }

  const updateBoard = (index, value) => {
    if (hasBoardFull()) { return }
    const newBoard = [...board]
    newBoard[index] = value
    setBoard(newBoard)
    saveBoardStorage(board)
    return newBoard
  }

  const validateBoard = () => {
    const newWinner = checkWinnerFrom(board)
    if (newWinner) setWinner(newWinner)
    if (hasBoardFull() && newWinner === null) setWinner(false)
    console.log({ winner, newWinner })
  }

  const hasBoardFull = () => {
    return board.every(cell => cell !== null)
  }

  const hasEmplyBoard = () => {
    return board.every(cell => cell === null)
  }

  useEffect(() => {
    if (hasEmplyBoard()) return
    validateBoard()
  }, [board])

  return { board, winner, setBoard, resetBoard, updateBoard, hasBoardFull }
}
