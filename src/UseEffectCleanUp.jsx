import React, { useEffect, useState } from 'react'

const UseEffectCleanUp = () => {
  let [toggle, setToggle] = useState(true)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle
      </button>

      {!toggle && <Checker />}
    </div>
  )
}
const Checker = () => {
  useEffect(() => {
    console.log(`Hello Im I performing well?`)
    let intId = setInterval(() => {
      console.log(`inner performance`)
    }, 2000)
    return () => {
      console.log(`clean up`)
      clearInterval(intId)
    }
  }, [])
  return (
    <div>
      <h3>Im checking the effect</h3>
    </div>
  )
}

export default UseEffectCleanUp
