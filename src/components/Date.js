import React from 'react'

const handleChange = (event) => console.log(event.target.value)

export const Date = () => {
  return (
    <input 
      className="form-control my-3" 
      type="date"
      onChange={handleChange}
      style={{width: 150}} 
    />
  )
}