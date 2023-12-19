import React from 'react'
import avater from '../src/assets/default-avatar.svg'
import { people } from '../data'
const List = () => {
  return (
    <div>
      <h2>List of users</h2>
      <ul className="users">
        {people.map((person) => (
          <li key={person.id}>
            <Person {...person} />
          </li>
        ))}
      </ul>
    </div>
  )
}
const Person = (person) => {
  console.log(person)
  return (
    <div>
      <h3>{person.name}</h3>
      <h5>{person.nickName || `My Guy`}</h5>
      <img src={person.images?.[0]?.small?.url || avater} />
    </div>
  )
}

export default List
