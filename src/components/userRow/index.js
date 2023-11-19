import React from "react"
import './styles.css'

import Button from "../button"

export default function UserRow({ user }) {

  const buttonFunctionStyle = {
    edit: '#89c4f4',
    delete: '#f64747'
  }

  return (
    <div className="user-row">
      <div className="user-column txt">
        <p>{user.name}</p>
      </div>
      <div className="user-column txt">
        <p>{user.email}</p>
      </div>
      <div className="user-column btn">
        <Button
          value='Editar'
          style={buttonFunctionStyle.edit}
        />
      </div>
      <div className="user-column btn">
      <Button
          value='Excluir'
          style={buttonFunctionStyle.delete}
        />
      </div>
    </div>
  )
}