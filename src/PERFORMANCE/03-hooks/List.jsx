import { memo } from 'react'
import Person from './Person'

const List = ({ people, handleDelete }) => {
  return (
    <div>
      {people.map((person) => {
        return (
          <Person key={person.id} {...person} handleDelete={handleDelete} />
        )
      })}
    </div>
  )
}
export default memo(List)
