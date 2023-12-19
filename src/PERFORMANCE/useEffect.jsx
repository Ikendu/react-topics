import { useCallback, useEffect, useState } from 'react'

let url = 'https://api.github.com/users'

const UserCount = () => {
  let [users, setUsers] = useState([])
  let [initial, setInitial] = useState(10)

  let fetchData = useCallback(async () => {
    try {
      let res = await fetch(url)
      let data = await res.json()
      console.log(data)
      setUsers(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => {
    console.log('Coming from second useEffect')
  }, [initial])

  const handleInital = () => {
    setInitial(initial + 1)
  }
  return (
    <div>
      <h3>{initial}</h3>
      <button onClick={handleInital}>Update Initial</button>
      <ul className={users}>
        {users.map((user) => (
          <li key={user.id}>
            <img src={user.avatar_url} />
            <h4>{user.login}</h4>
            <a href={user.html_url}>user profile</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default UserCount
