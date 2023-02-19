import Button from '../Button'
import { Square } from '../Square'

import styles from './WinnerModal.module.css'

export function WinnerModal ({ winner, resetGame, resetAll }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Ganó:'

  return (
    <section className={styles.winner}>
      <div className={styles.text}>
        <h2>{winnerText}</h2>

        <header className={styles.win}>
          {winner && <Square min>{winner}</Square>}
        </header>

        <footer>
          <Button onClick={resetAll}>Reiniciar todo</Button>
          <Button onClick={resetGame}>Otra partida</Button>
        </footer>
      </div>
    </section>
  )
}
