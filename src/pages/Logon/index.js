import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'

import "./styles.css"
import lawImg from '../../assets/law.png'

import Navbar from "../../components/navbar"
import api from "../../services/api"

export default function Logon() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('http://localhost:3333/api/v1/login', {
        email: email,
        password: password
      })

      localStorage.setItem('userId', response.data.user.id)
      localStorage.setItem('userName', response.data.user.name)
      navigate('/panel')
    } catch (error) {
      console.log(error)
      alert('Falha no login, tente novamente')
    }
  }

  return (
    <div className="logon-container">
      <Navbar />
      <section className="form-container">
        <div className="logon-image">
          <img src={lawImg} alt="Law"></img>
        </div>
        <div className="logon-form">
          <form onSubmit={handleLogin}>
            <h1>CRUD Project</h1>
            <h2 >Entre na sua conta</h2>
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button className="button" type="submit">Login</button>
          </form>
        </div>
      </section>
    </div>
  )
}