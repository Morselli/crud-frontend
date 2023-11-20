import React from "react"
import Modal from "react-modal"
import Button from "../button"
import UserForm from "../userForm"

export default function UserModal({ isOpen, isEdit, cancelParameter, userId }) {

  console.log('USER MODAL', userId)

  return (
    <>
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            width: '100vw',
            height: '100vh',
            margin: '0 auto'
          },
          content: {
            width: '500px',
            height: '60vh',
            margin: 'auto',
            borderRadius: '5px',
            backgroundColor: '#f3f1ef'
          }
        }}
      >
        <div className="modal-header">
          {isEdit ? (
            <h2>Edição de usuário</h2>
          ) : (
            <h2>Cadastro de usuário</h2>
          )}
          <Button
            value={'X'}
            onClick={cancelParameter}
            style={{
              backgroundColor: '#f1828d'
            }}
          />
        </div>
        {isEdit ? (
          <UserForm cancelParameter={cancelParameter} isEdit={true} userId={userId}/>
        ) : (
          <UserForm cancelParameter={cancelParameter} />
        )}
      </Modal>
    </>
  )
}