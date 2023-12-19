import { useState } from 'react'
let frames = [`java`, `react`, `script`, `oranger`]

const Formothers = () => {
  let [shipping, setShipping] = useState(false)
  let [frame, setFrame] = useState(`react`)
  const handleChecked = (e) => {
    setShipping(e.target.checked)
    //console.log(e.target.checked)
  }
  const handleFlame = (e) => {
    setFrame(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(frame, shipping)
    setShipping(false)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input type="checkBox" checked={shipping} onChange={handleChecked} />
        </div>
        <div className="form-row" style={{ textAlign: 'left' }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select name="frame" id="frame" value={frame} onChange={handleFlame}>
            {frames.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}

export default Formothers
