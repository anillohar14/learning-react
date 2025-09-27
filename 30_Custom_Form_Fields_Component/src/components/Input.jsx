import React from 'react'

function Input({label, id, name, value, onChange, errors}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <p className="error">{errors}</p>
      </div>
  )
}

export default Input