import React from 'react'
import './textfield.css'
function TextField (props) {
  const { placeholder, width, multiline, rows, defaultValue } = props

  return multiline ? (
    <textarea
      style={{ width: width }}
      className='input'
      placeholder={placeholder}
      rows={rows}
      defaultValue={defaultValue}
    />
  ) : (
    <input
      style={{ width: width }}
      type='text'
      className='input single-line'
      placeholder={placeholder}
      defaultValue={defaultValue}
    />
  )
}

export default TextField
