import { useState } from 'react'

const FormOneState = () => {
  let [user, setUser] = useState({ name: ``, email: ``, password: `` })
  let [users, setUsers] = useState([])

  const handleChange = (e) => {
    let id = Date.now()
    setUser({ ...user, id, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUsers([...users, user])
    setUser({ name: ``, email: ``, password: `` })
  }
  const handleDelete = (id) => {
    let newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            name="name"
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={user.password}
            name="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h2>List of Users</h2>
      {users.map(({ name, email, id }) => (
        <div key={id} className="form">
          <h6>{id}</h6>
          <h3>{name}</h3>
          <h5>{email}</h5>
          <button className="btn" onClick={() => handleDelete(id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export default FormOneState
