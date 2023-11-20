import React, { useEffect } from "react"

import "./styles.css"
import Navbar from "../../components/navbar"
import HomeCard from "../../components/homeCard"
import { useNavigate } from "react-router"

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const localStorageId = localStorage.getItem('userId')
    if (localStorageId) {
      navigate('/panel')
    }
  })


  return (
    <div className="home-container">
      <Navbar />
      <HomeCard />
    </div>
  )
}