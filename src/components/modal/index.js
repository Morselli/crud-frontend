import React from "react"
import Modal from "react-modal"
import Button from "../button"
import UserForm from "../userForm"
import './styles.css'
import api from "../../services/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function UserModal({ isOpen, isEdit, isDelete, cancelParameter, userId }) {

  async function handleDeleteUser(e, userId) {
    e.preventDefault()
    
    try {
      await api.delete(`http://localhost:3333/api/v1/user/${userId}`)

      notifyDeleteSuccess()
      setInterval(reloadPage, 1500)
    } catch (error) {
      
    }
  }

  const notifyDeleteSuccess = () => toast("Usuário excluído com sucesso!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  function reloadPage() {
    window.location.reload(true)
  }

  const buttonStyle = {
    width: '80px',
    height: '35px',
  }

  const buttonColorByFunction = {
    delete: '#f1828d',
    cancel: '#e8e8e8'
  }



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
          {isDelete ? (
            <h2>Remoção de usuário</h2>
          ) : (
            <>
              {isEdit ? (
                <h2>Edição de usuário</h2>
              ) : (
                <h2>Criação de usuário</h2>
              )}
            </>
          )}
          <Button
            value={'X'}
            onClick={cancelParameter}
            style={{
              backgroundColor: '#f1828d'
            }}
          />
        </div>
        {isDelete ? (
          <div className="delete-modal-body">
            <div className="delete-confirm-message">
              <h3>Deseja realmente excluir o usuário?</h3>
            </div>
            <div className="delete-modal-buttons">
              <Button
                value={'Cancelar'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.cancel
                }}
                onClick={cancelParameter}
              />
              <Button
                value={'Excluir'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.delete
                }}
                onClick={e => handleDeleteUser(e, userId)}
              />
            </div>
          </div>
        ) : (
          <>
            {isEdit ? (
              <UserForm cancelParameter={cancelParameter} isEdit={true} userId={userId} />
            ) : (
              <UserForm cancelParameter={cancelParameter} />
            )}
          </>
        )}
      </Modal>
      <ToastContainer />
    </>
  )
}