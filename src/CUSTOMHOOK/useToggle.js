import React, { useState } from 'react'

const useToggle = (defaultValue) => {
  let [show, setShow] = useState(defaultValue)

  const toggle = () => {
    setShow(!show)
  }
  return { show, toggle }
}

export default useToggle
