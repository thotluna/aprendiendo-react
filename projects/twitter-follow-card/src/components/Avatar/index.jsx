import classNames from 'classnames'
import styles from './Avatar.module.css'

export function Avatar ({ userName, lg = false }) {
  return (
    <img className={classNames(styles.img, lg && styles.lg)} src={`https://unavatar.io/${userName}`} alt={userName} />
  )
}
