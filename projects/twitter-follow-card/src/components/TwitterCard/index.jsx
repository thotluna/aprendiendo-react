import { Avatar } from '../Avatar'
import { ButtonFollow } from '../ButtonFollow'
import { CounterFollow } from '../CounterFollow'
import { DataUser } from '../DataUser'
import { WrapperColumn } from '../WrapperColumn'
import { WrapperRow } from '../WrapperRow'
import styles from './TwitterCard.module.css'

export function TwitterCard ({ user, onToggle, handlerMouseOver, handlerMouseOut }) {
  const { userName, isFollowing, description, following, followers } = user

  return (
    <article
      className={styles.card}
      onMouseEnter={handlerMouseOver}
      onMouseLeave={handlerMouseOut}
    >
      <WrapperRow>
        <Avatar userName={userName} lg />
        <ButtonFollow isFollowing={isFollowing} onToggle={onToggle} />
      </WrapperRow>
      <WrapperColumn className={styles.main}>
        <DataUser user={user} />
        <p>{description}</p>
        <CounterFollow following={following} followers={followers} />
      </WrapperColumn>
    </article>
  )
}
