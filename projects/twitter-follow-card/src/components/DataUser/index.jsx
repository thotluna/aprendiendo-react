import classNames from 'classnames'
import { WrapperColumn } from '../WrapperColumn'
import styles from './DataUser.module.css'

export function DataUser ({ user }) {
  const { name, userName, isFollowing } = user
  return (
    <WrapperColumn>
      <span className={
          classNames(
            styles['tw-user'],
            styles['tw-user-name'],
            isFollowing && styles['is-following']
          )
        }
      >
        {name}
      </span>
      <span className={
          classNames(
            styles['tw-user'],
            styles['tw-user-username'],
            isFollowing && styles['is-following']
          )
        }
      >
        @{userName}
      </span>
    </WrapperColumn>
  )
}
