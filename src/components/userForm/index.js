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
  const [userData, setUserData] = useState({})

  async function handleCreateUser(e) {
    e.preventDefault()

    try {
      await api.post('http://localhost:3333/api/v1/user/create', {
        name: userName,
        email: userEmail,
        password: userPassword
      })

      notify()
      setInterval(reloadPage, 3000)
    } catch (error) {
      console.log(error)
      alert('Falha ao criar usuário')
    }
  }

  useEffect(() => {
    if (isEdit) {
      async function handleGetUserData(userId) {
        //e.preventDefault()

        try {
          const getUserByIdResponse = await api.get(`http://localhost:3333/api/v1/user/${userId}`)
          console.log(getUserByIdResponse.data)
          setUserData(getUserByIdResponse.data)
        } catch (error) {
          console.log(error)
        }
      }

      handleGetUserData(userId)
    }
  }, [isEdit, userId])

  const notify = () => toast("Usuário criado com sucesso!", {
    position: "top-right",
    autoClose: 3000,
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
          <form>
            <input
              type='text'
              name='name'
              placeholder='Nome do usuário'
              value={userData?.name}
              onChange={e => setUserName(e.target.value)}
            />
            <input
              type='email'
              name='email'
              placeholder='E-mail do usuário'
              value={userData?.email}
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