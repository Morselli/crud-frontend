import React, { useEffect, useState } from "react"
import './styles.css'
import api from '../../services/api'
import UserRow from "../userRow"

export default function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function getUsers() {
      const users = await api.get('http://localhost:3333/api/v1/users')
      console.log('LISTA DE USERS', users)
      setUsers(users)
    }

    getUsers()
  }, [])

  const userListColumns = ['Nome do usuário', 'E-mail do usuário', 'Opções']

  return (
    <div className="user-list-container">
      <section className="list-header">
        {userListColumns.map(column =>
          column === 'Opções' ?
            <div className="header-column options">
              <p>{column}</p>
            </div> :
            <div className="header-column">
              <p>{column}</p>
            </div>
        )}
      </section>
      <section className="user-list">
        {users.data?.map(user =>
          <UserRow user={user} />
        )}
      </section>
    </div>
  )
}