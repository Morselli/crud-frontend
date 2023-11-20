import React from 'react'
import './styles.css'

export default function Button({type, value, style, className, onClick}) {

  return (
    <>
      <button
        type={type}
        className={className}
        style={style}
        onClick={onClick}
      >
        {value}
      </button>
    </>
  )
}