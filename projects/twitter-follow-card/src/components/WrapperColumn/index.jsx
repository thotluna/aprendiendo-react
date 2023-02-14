import classNames from 'classnames'
import styles from './WrapperColumn.module.css'

export function WrapperColumn (props) {
  const { className: classNameFather, children } = props
  return (
    <div
      {...props}
      className={
      classNames(
        styles.column,
        classNameFather && classNameFather
      )
    }
    >
      {children}
    </div>
  )
}
