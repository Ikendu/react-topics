//uncontrolled input form

import { useState } from 'react'

const FormDataAPI = () => {
  let [users, setUsers] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    let id = Date.now()
    let formData = new FormData(e.currentTarget)
    // let name = formData.get(`name`)
    // let email = formData.get(`email`)
    // let values = formData.values()
    // let keys = formData.keys()
    // let entries = formData.entries()
    // console.log(name, email, [...values], [...keys], [...entries])
    // console.log(formData)
    let getData = Object.fromEntries(formData)
    getData = { ...getData, id }
    setUsers([...users, getData])
    console.log(users)
    e.currentTarget.reset()
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Data API</h4>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" name="name" />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input type="email" className="form-input" id="email" name="email" />
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
            name="password"
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>List of users</h1>
      {users.map((item) => (
        <div key={item.id} className="form">
          <h4>{item.name}</h4>
          <h5>{item.email}</h5>
        </div>
      ))}
    </div>
  )
}

export default FormDataAPI
