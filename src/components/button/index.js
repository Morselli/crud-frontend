import React from 'react'
import './styles.css'

export default function Button({value, style, className}) {

  return (
    <>
      <button className={className} style={{'backgroundColor': style}}>{value}</button>
    </>
  )
}