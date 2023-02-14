import classNames from 'classnames'
import styles from './WrapRow.module.css'

export function WrapperRow (props) {
  const { className: classNameFather, children } = props
  return (
    <div
      {...props}
      className={
      classNames(
        styles.rows,
        classNameFather && classNameFather
      )
    }
    >
      {children}
    </div>
  )
}
