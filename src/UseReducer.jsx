import React, { useReducer, useState } from 'react'
import { data } from '../data'
//go down for useReducer

const UseState = () => {
  const [state, setState] = useState(0)

  const handlePlus = () => {
    setState(state + 1)
    //to get realtime value
    // setState((value) => {
    //   let newValue = value + 1
    //   return newValue
    //})
  }
  const handleMinus = () => {
    //to call it after some timeout we need to use function
    setState(state - 1)
    // setState((num) => {
    //   let remain = num - 1
    //   return remain
    // })
  }
  return (
    <div className="container">
      <h4>Basic UseState</h4>
      <h3 className="container">{state}</h3>
      <button className="btn" onClick={handlePlus}>
        Increase
      </button>
      <button className="btn" onClick={handleMinus}>
        reduce
      </button>
      <UserData />
      <Update />
    </div>
  )
}

const DELETE_ALL = ` DELETE_ALL`
const DELETE_ITEM = `DELETE_ITEM`
const RESET = `RESET`

let defaultState = {
  names: data,
}

let reducer = (state, action) => {
  if (action.type === DELETE_ALL) {
    return { ...state, names: [] }
  }
  if (action.type === DELETE_ITEM) {
    let newList = state.names.filter((name) => name.id !== action.id)
    return { ...state, names: newList }
  }
  if (action.type == RESET) {
    return { ...state, names: data }
  }
}

const UserData = () => {
  console.log(`redering`)
  let [state, dispatcher] = useReducer(reducer, defaultState)

  const deleteAll = () => {
    dispatcher({ type: DELETE_ALL })
  }

  const deleteName = (id) => {
    dispatcher({ type: DELETE_ITEM, id })
  }

  const returnAll = () => {
    dispatcher({ type: RESET })
  }

  return (
    <div>
      {state.names.map(({ name, id }) => (
        <div key={id}>
          <h3>{name}</h3>
          <button className="btn" onClick={() => deleteName(id)}>
            Delete
          </button>
        </div>
      ))}
      {state.names.length > 0 ? (
        <>
          <button className="btn" onClick={deleteAll}>
            Remove all
          </button>
        </>
      ) : (
        <>
          <button className="btn" onClick={returnAll}>
            Return all
          </button>
        </>
      )}
    </div>
  )
}

const Update = () => {
  let [person, setPerson] = useState({
    name: 'John',
    age: 22,
    status: 'Teacher',
  })

  const changer = () => {
    //setPerson({ name: 'Chibundu', age: 29, status: 'Developer' }) OR
    //to get realtime value
    setPerson((obj) => {
      let newObj = { ...obj, name: 'Chibundu', age: 29, status: 'Developer' }
      return newObj
    })
  }

  let { name, age, status } = person
  return (
    <div>
      <hr />
      <hr />
      <h3>{name}</h3>
      <h4>{age}</h4>
      <h4>{status}</h4>
      <button className="btn" onClick={changer}>
        Change
      </button>
    </div>
  )
}

export default UseState
