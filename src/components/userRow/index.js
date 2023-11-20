import React, { useState } from "react"
import './styles.css'

import Button from "../button"
import UserModal from "../modal"

export default function UserRow({ user }) {
  const [openEdit, setOpenEdit] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  function openEditModal() {
    setOpenEdit(true)
  }

  function openDeleteModal() {
    setOpenDelete(true)
  }

  function closeEditModal() {
    setOpenEdit(false)
  }

  function closeDeleteModal() {
    setOpenDelete(false)
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
          style={{ backgroundColor: buttonFunctionStyle.edit }}
          onClick={openEditModal}
        />
        <UserModal
          isOpen={openEdit}
          cancelParameter={closeEditModal}
          isEdit={true}
          userId={userId}
        />
      </div>
      <div className="user-column btn">
        <Button
          value='Excluir'
          style={{ backgroundColor: buttonFunctionStyle.delete }}
          onClick={openDeleteModal}
        />
        <UserModal
          isOpen={openDelete}
          cancelParameter={closeDeleteModal}
          isDelete={true}
          userId={userId}
        />
      </div>
    </div>
  )
}