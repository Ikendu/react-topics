import React, { useState } from 'react'

const ShortCircuit = () => {
  let [name, setName] = useState(`Chibunud`)
  let [text, setText] = useState(``)
  let [isTrue, setIsTrue] = useState(false)
  let [click, setClick] = useState(true)
  let [login, setLoging] = useState(`login`)

  const handleClick = () => {
    //click ? setClick(false) : setClick(true)
    setClick(!click)
  }
  const handleLogin = () => {
    setLoging(!login)
  }
  return (
    <div>
      <button className="btn" onClick={handleLogin}>
        {login ? `logout` : `login`}
      </button>
      {login && <Login name={name} />}

      <h2>{text || `No name`}</h2>

      {text ? (
        <h3>Welcome {name} new things are waiting for you</h3>
      ) : (
        <h3>Please login or create account</h3>
      )}

      {isTrue && (
        <div>
          <h2>Some thing</h2>
          <h3>and other things</h3>
        </div>
      )}

      {text || <h1>Im still here</h1>}

      <h3></h3>
      <button className="btn">{isTrue ? `edit` : `add`}</button>
      <br />
      <button className="btn" onClick={handleClick}>
        {click ? <h3>Hello smiles</h3> : <h3>Im out</h3>}
      </button>
    </div>
  )
}
const Login = ({ name }) => {
  return (
    <div>
      <h3>{name} Welcome</h3>
    </div>
  )
}

export default ShortCircuit
