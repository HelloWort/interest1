import React, { useState, useEffect } from 'react'

function UpdateTitle() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Count = ${count}`
  })
  const handleChange = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <h1>Count = {count}</h1>
      <button onClick={handleChange}>Increase count</button>
      <p>Count = {count}</p>
    </div>
  )
}

export default UpdateTitle