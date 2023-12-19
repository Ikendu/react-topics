const Person = ({ name, id, handleDelete }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  )
}
export default Person
