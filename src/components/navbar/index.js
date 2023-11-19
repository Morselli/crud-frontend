import React from "react"

import "./styles.css"

export default function Navbar(isPanel) {
  return (
    <nav>
      <ul>
        <>
        {!isPanel ?         
        <>
          <a href="/"><li className="menu-item left-menu">Home</li></a>
          <a href="/login"><li className="menu-item">Login</li></a>
        </>
        :
        <>
          <button>Logout</button>
        </>
        }
        </>
      </ul>
    </nav>
  )
}