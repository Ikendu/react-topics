import React, { useEffect, useState } from 'react'

const Conditional = () => {
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  if (loading) return <h2>Loading...</h2>

  return (
    <div>
      <h1>Welcome to Ikendu Growth Center</h1>
    </div>
  )
}

export default Conditional
