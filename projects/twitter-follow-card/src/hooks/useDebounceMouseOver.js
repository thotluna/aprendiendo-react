import debounce from 'just-debounce-it'
import { useState } from 'react'

export function useDebounceMouseOver () {
  const [showCardUser, setShowCardUser] = useState(false)

  const debounceMouseOver = debounce(() => {
    setShowCardUser(true)
  }, 500)

  const debounceMouseOut = debounce(() => {
    setShowCardUser(false)
  }, 500)

  const handlerMouseOver = () => {
    debounceMouseOver()
  }

  const handlerMouseOut = () => {
    debounceMouseOver.cancel()
    debounceMouseOut()
  }

  return [showCardUser, handlerMouseOver, handlerMouseOut]
}
