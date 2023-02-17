import { TURNS } from '../../constants'
import { Square } from '../Square'

import styles from './TurnDisplay.module.css'

export default function TurnDisplay ({ turn }) {
  return (
    <section className={styles.turn}>
      <Square min isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>
      <Square min isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>
  )
}
