//another way of using unconcontrolled input
import { useState, useRef, useEffect } from 'react'

const UseRefBasic = () => {
  const [value, setValue] = useState(0)
  const [user, setUser] = useState({
    name: `Oba`,
    email: `Ezeoha`,
    id: Date.now(),
  })
  const [users, setUsers] = useState([])
  let ref1 = useRef(``)
  let ref2 = useRef(``)

  useEffect(() => {
    ref1.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = Date.now()
    let name = ref1.current.value
    let email = ref2.current.value
    setUser({ name, email, id })
    setUsers([...users, user])
    e.currentTarget.reset()
  }
  console.log(users)

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" id="name" className="form-input" ref={ref1} />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="text" id="email" className="form-input" ref={ref2} />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
      <h2>List of users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
            <h4>{user.email}</h4>
          </div>
        )
      })}
    </div>
  )
}

export default UseRefBasic
