import { WinnerModal } from '../WinnerModal'
import { TurnDisplay } from '../TurnDisplay'
import { Game } from '../Game'
import { Footer } from '../Footer'
import { Score } from '../Score'
import Button from '../Button'

import { useGame } from '../../hooks/useGame.js'

import styles from './Board.module.css'

export default function Board ({ players }) {
  const { board, turn, winner, resetGame, resetAll, move } = useGame({ players })
  return (
    <main className={styles.board}>
      <h1>Tic tac toe</h1>
      <Score />
      <div>
        <Button onClick={resetAll}>Reiniciar juegos</Button>
        <Button onClick={resetGame}>Reiniciar tablero</Button>
      </div>
      <Game board={board} updateBoard={move} />
      <TurnDisplay turn={turn} />
      <WinnerModal resetGame={resetGame} resetAll={resetAll} winner={winner} />
      <Footer>
        {turn}
      </Footer>
    </main>
  )
}
