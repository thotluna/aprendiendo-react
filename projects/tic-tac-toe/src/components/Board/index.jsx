import { useEffect } from 'react'
import confetti from 'canvas-confetti'

import { WinnerModal } from '../WinnerModal'
import { resetGameStorage } from '../../logic/storage/index.js'
import TurnDisplay from '../TurnDisplay'
import Game from '../Game'
import Button from '../Button/index.jsx'

import styles from './Board.module.css'
import { usePlay } from '../../hooks/usePlay'
import Footer from '../Footer'
import { useBoard } from '../../hooks/useBoard'
import { useTurn } from '../../hooks/useTurn'

export default function Board ({ players }) {
  const { restartPlay } = usePlay()
  const { board, winner, resetBoard, updateBoard, hasBoardFull } = useBoard()
  const { turn, changeTurn, resetTurn } = useTurn()

  const resetGame = () => {
    restartPlay()
    resetBoard()
    resetTurn()
    resetGameStorage()
  }

  const playComputer = () => {
    let index
    do {
      index = Math.trunc(Math.random() * board.length)
    } while (board[index] !== null)

    move(index)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!players.includes(turn) && winner === null && !hasBoardFull()) {
        playComputer()
      }
    }, 500)
    return () => clearTimeout(timeout)
  }, [turn])

  useEffect(() => {
    if (winner) confetti()
    console.log({ winner })
  }, [winner])

  const move = (index) => {
    if (board[index] || winner) return
    updateBoard(index, turn)

    // const newWinner = checkWinnerFrom(newBoard)
    // if (newWinner) {
    //   confetti()
    //   setWinner(newWinner)
    //   return
    // } else if (checkEndGame(newBoard)) {
    //   setWinner(false) // empate
    //   return
    // }

    changeTurn()
  }
  return (
    <main className={styles.board}>
      <h1>Tic tac toe</h1>
      <Button onClick={resetGame}>Reset del juego</Button>
      <Game board={board} updateBoard={move} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} winner={winner} />
      <Footer>
        {turn}
      </Footer>
    </main>
  )
}
