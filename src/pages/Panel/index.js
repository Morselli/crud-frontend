import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import './styles.css'

import UserList from "../../components/userList"
import Button from "../../components/button"
import Navbar from "../../components/navbar"
import UserModal from "../../components/modal"
import { useNavigate } from "react-router"

export default function Panel() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  Modal.setAppElement('#root')

  const buttonFunctionStyle = {
    create: '#66cc99'
  }

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  useEffect(() => {
    function areUserLoggedIn() {
      const userId = localStorage.getItem('userId')

      if (!userId) {
        navigate('/login')
      }
    }

    areUserLoggedIn()
  })

  return (
    <div className="panel-container">
      <Navbar isPanel={true} />
      <div className="button-list">
        <Button
          className={'btn-create'}
          value={'Novo'}
          style={{ backgroundColor: buttonFunctionStyle.create }}
          onClick={openModal}
        />
      </div>
      <UserModal isOpen={isOpen} cancelParameter={closeModal} />
      <UserList />
    </div>
  )
}