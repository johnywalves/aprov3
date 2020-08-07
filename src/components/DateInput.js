import React, { useCallback } from 'react'

const Date = ({ date, setDate }) => {

  const handleChange = useCallback((event) => {
    setDate(event.target.value);
  }, [setDate])

  return (
    <input
      className="form-control my-3"
      type="date"
      name="data"
      value={date}
      onChange={handleChange}
      style={{ width: 200 }}
      pattern="\d{2}-\d{2}-\d{4}"
    />
  )
}

export default Date