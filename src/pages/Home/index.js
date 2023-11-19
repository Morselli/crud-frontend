import React from "react"

import "./styles.css"
import Navbar from "../../components/navbar"
import HomeCard from "../../components/homeCard"

export default function Home() {
  return (
    <div className="home-container">
      <Navbar/>
      <HomeCard/>
    </div>
  )
}