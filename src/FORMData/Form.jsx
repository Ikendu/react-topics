import { useState } from 'react'
import { data } from '../data'

const Form = () => {
  const [name, setName] = useState(``)
  const [email, setEmail] = useState(``)
  const [users, setUsers] = useState(data)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    let id = Date.now()
    setUsers([...users, { id, name, email }])
    console.log(name, email, id)
    setName(``)
    setEmail(``)
  }
  const deleteUser = (id) => {
    let newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            name="name"
            onChange={handleName}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="text"
            className="form-input"
            id="email"
            value={email}
            name="email"
            onChange={handleEmail}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>Users details</h1>
      {users.map(({ id, name, email }) => (
        <div key={id}>
          <h3>{name}</h3>
          <h5>{email}</h5>
          <button className="btn" onClick={() => deleteUser(id)}>
            delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default Form
