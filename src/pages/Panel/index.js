import React from "react"
import './styles.css'

import UserList from "../../components/userList"
import Button from "../../components/button"
import Navbar from "../../components/navbar"

export default function Panel() {

  const buttonFunctionStyle = {
    create: '#66cc99'
  }

  return (
    <div className="panel-container">
      <Navbar isPanel={true} />
      <div className="button-list">
        <Button className={'btn-create'} value={'Novo'} style={buttonFunctionStyle.create} />
      </div>
      <UserList />
    </div>
  )
}