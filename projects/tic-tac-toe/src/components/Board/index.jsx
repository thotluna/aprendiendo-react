import { useState } from 'react'
import confetti from 'canvas-confetti'

import { TURNS } from '../../constants'
import { checkWinnerFrom, checkEndGame } from '../../logic/board.js'
import { WinnerModal } from '../WinnerModal'
import { saveGameToStorage, resetGameStorage } from '../../logic/storage/index.js'
import TurnDisplay from '../TurnDisplay'
import Game from '../Game'
import Button from '../Button/index.jsx'

import styles from './Board.module.css'

export default function Board () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return
    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // guardar aqui partida
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })
    // revisar si hay ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }
  return (
    <main className={styles.board}>
      <h1>Tic tac toe</h1>
      <Button onClick={resetGame}>Reset del juego</Button>
      <Game board={board} updateBoard={updateBoard} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>
  )
}
