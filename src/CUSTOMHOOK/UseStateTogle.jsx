import useToggle from './useToggle'

const Toggling = () => {
  let { show, toggle } = useToggle(true)

  return (
    <div>
      <button className="btn" onClick={toggle}>
        Show
      </button>
      <h3>{show && `I'm on`}</h3>
    </div>
  )
}
export default Toggling
