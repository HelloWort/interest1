import React, { useState } from 'react'

function InputComponents() {
  const [data, setData] = useState('')
  const handleChange = (event) => {
    setData(event.target.value)
  }
  return (
    <div>
      <h1>Input Example</h1>
      <input
        type='text'
        value={data}
        onChange={handleChange}
      />
      Entered input: {data}
    </div>
  )
}

export default InputComponents