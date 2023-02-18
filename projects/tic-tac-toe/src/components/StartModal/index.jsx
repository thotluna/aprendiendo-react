import { Square } from '../Square'
import Button from '../Button'
import { TURNS } from '../../constants.js'

import styles from './StartModal.module.css'

export function StartModel ({ players, setPlay, onPlayers }) {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Seleccione los jugadores</h2>
        <div className={styles.players}>
          <Square
            onClick={() => onPlayers(TURNS.X)}
            isSelected={players.includes(TURNS.X)}
          >
            {TURNS.X}
          </Square>
          <Square
            onClick={() => onPlayers(TURNS.O)}
            isSelected={players.includes(TURNS.O)}
          >
            {TURNS.O}
          </Square>
        </div>
        <Button onClick={() => setPlay(true)}>Jugar</Button>
      </div>
    </section>
  )
}
