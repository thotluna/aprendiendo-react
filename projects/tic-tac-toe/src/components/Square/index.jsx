import classnames from 'classnames'
import styles from './Square.module.css'

export const Square = ({ children, isSelected, onClick, index, min = false }) => {
  const handleClick = () => {
    onClick(index)
  }

  return (
    <div
      onClick={handleClick}
      className={
        classnames(
          styles.square,
          isSelected ? styles['is-selected'] : null,
          min ? styles['min-square'] : null
        )
      }
    >
      {children}
    </div>
  )
}
