import React from "react"

import "./styles.css"
import Button from "../button"

export default function Navbar({ isPanel }) {

  function logout() {
    localStorage.removeItem('userId')
    localStorage.removeItem('userName')
  }

  return (
    <nav>
      {!isPanel ? (
        <ul className="ul-home-login">
          <a href="/"><li className="menu-item left-menu">Home</li></a>
          <a href="/login"><li className="menu-item">Login</li></a>
        </ul>
      ) : (
        <>
          <h1>Bem vindo, {localStorage?.getItem('userName')}</h1>
          <ul className="ul-panel">
            <a href="/" className="btn-logout"><Button value={'Logout'} onClick={logout}/></a>
          </ul>
        </>
      )
      }
    </nav>
  )
}