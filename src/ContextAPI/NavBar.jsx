import { useState, createContext, useContext } from 'react'
const NavContext = createContext()

//custom hook
export const useAppContext = () => useContext(NavContext)

const NavBar = () => {
  let [user, setUser] = useState({ name: `ikendu` })
  const logout = () => {
    setUser({ name: null })
  }
  return (
    <NavContext.Provider value={{ user, logout }}>
      <div className="navbar">
        <h2>Ikendu Grows</h2>
        <NavLinks />
      </div>
    </NavContext.Provider>
  )
}

const NavLinks = () => {
  return (
    <div className="nav-container">
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  )
}

const UserContainer = () => {
  let { user, logout } = useAppContext()

  return (
    <div className="user-container">
      <button className="btn" onClick={logout}>
        {user.name ? `Logout` : `Login`}
      </button>
      <h4>
        {user.name ? `Welcome ` + user.name?.toUpperCase() : `please login`}
      </h4>
    </div>
  )
}

export default NavBar
