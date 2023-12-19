import { useEffect, useState } from 'react'
//fetching data through API
//using async-await inside useEffect
//use setTimeout to allow the page load well before lendering
//handle error catching
const url = 'https://api.github.com/users'

const FetchingData = () => {
  let [users, setUsers] = useState([])
  let [loading, setLoading] = useState(true)
  let [isError, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url)
        if (!resp.ok) {
          setError(true)
          setLoading(false)
        }
        const data = await resp.json()
        setUsers(data)
        console.log(users)
      } catch (error) {
        setError(true)
      }
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }

    getData()
  }, [])

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
        <h4>content is about to display</h4>
      </div>
    )
  }
  if (isError) {
    return (
      <div>
        <h2>an error occurred</h2>
        <h4>please check your network</h4>
        <h5>you can also try reloading your web page</h5>
      </div>
    )
  }

  return (
    <div>
      <h1>Github Users</h1>
      <ul className="users">
        {users.map((user) => (
          <ul key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <div>
              <h4>{user.login}</h4>
              <a href={user.html_url}> view profile</a>
              <br />
              <a href={user.repos_url}>view repository</a>
            </div>
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default FetchingData
