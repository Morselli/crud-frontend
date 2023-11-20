import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from '../button'
import api from '../../services/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UserForm({ isEdit, cancelParameter, userId }) {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  async function handleCreateUser(e) {
    e.preventDefault()

    try {
      await api.post('http://localhost:3333/api/v1/user/create', {
        name: userName,
        email: userEmail,
        password: userPassword
      })

      notifyCreateSuccess()
      setInterval(reloadPage, 1500)
    } catch (error) {
      console.log(error)
      alert('Falha ao criar usuário')
    }
  }

  async function handleUpdateUser(e, userId) {
    e.preventDefault()

    try {
      await api.put(`http://localhost:3333/api/v1/user/${userId}`, {
        name: userName,
        email: userEmail
      })

      notifyUpdateSuccess()
      setInterval(reloadPage, 1500)
    } catch (error) {
      console.log(error)
      alert('Falha ao atualizar usuário')
    }
  }

  useEffect(() => {
    if (isEdit) {
      async function handleGetUserData(userId) {

        try {
          const getUserByIdResponse = await api.get(`http://localhost:3333/api/v1/user/${userId}`)
          setUserName(getUserByIdResponse.data.name)
          setUserEmail(getUserByIdResponse.data.email)
        } catch (error) {
          console.log(error)
        }
      }

      handleGetUserData(userId)
    }
  }, [isEdit, userId])

  const notifyCreateSuccess = () => toast("Usuário criado com sucesso!", {
    position: "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  })

  const notifyUpdateSuccess = () => toast("Usuário atualizado com sucesso!", {
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
    create: '#66cc99',
    cancel: '#e8e8e8'
  }

  return (
    <div className='user-form-container'>
      {isEdit ? (
        <>
          <form onSubmit={e => handleUpdateUser(e, userId)}>
            <input
              type='text'
              name='name'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              type='email'
              name='email'
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
            <div className='modal-button-list'>
              <Button
                type={'button'}
                value={'Cancelar'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.cancel
                }}
                onClick={cancelParameter}
              />
              <Button
                type={'submit'}
                value={'Atualizar'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.create
                }}
              />
            </div>
          </form>
          <ToastContainer />
        </>
      ) : (
        <>
          <form onSubmit={handleCreateUser}>
            <input
              type='text'
              name='name'
              placeholder='Nome do usuário'
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              type='email'
              name='email'
              placeholder='E-mail do usuário'
              value={userEmail}
              onChange={e => setUserEmail(e.target.value)}
            />
            <input
              type='password'
              name='password'
              placeholder='Senha do usuário'
              value={userPassword}
              onChange={e => setUserPassword(e.target.value)}
            />
            <div className='modal-button-list'>
              <Button
                type={'button'}
                value={'Cancelar'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.cancel
                }}
                onClick={cancelParameter}
              />
              <Button
                type={'submit'}
                value={'Criar'}
                style={{
                  width: buttonStyle.width,
                  height: buttonStyle.height,
                  backgroundColor: buttonColorByFunction.create
                }}
              />
            </div>
          </form>
          <ToastContainer />
        </>
      )}
    </div>
  )
}