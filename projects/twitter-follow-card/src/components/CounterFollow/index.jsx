import { WrapperRow } from '../WrapperRow'
import { abbrNum } from '../../utilities/numbers'
import styles from './CounterFollow.module.css'

export function CounterFollow ({ following, followers }) {
  return (
    <WrapperRow className={styles['counters-wrapper']}>
      <span><span className={styles['number-counter']}>{abbrNum(following)}</span> Followings</span>
      <span><span className={styles['number-counter']}>{abbrNum(followers)}</span> Followers</span>
    </WrapperRow>
  )
}
