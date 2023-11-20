import React, { useState } from "react"
import './styles.css'

import Button from "../button"
import UserModal from "../modal"

export default function UserRow({ user }) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const buttonFunctionStyle = {
    edit: '#89c4f4',
    delete: '#f1828d'
  }

  const userId = user.id

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
          style={{backgroundColor: buttonFunctionStyle.edit}}
          onClick={openModal}
        />
        <UserModal
          isOpen={isOpen}
          cancelParameter={closeModal}
          isEdit={true}
          userId={userId}
        />
      </div>
      <div className="user-column btn">
      <Button
          value='Excluir'
          style={{backgroundColor: buttonFunctionStyle.delete}}
        />
      </div>
    </div>
  )
}