import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Logon from "./pages/Logon"
import Home from "./pages/Home"
import Panel from "./pages/Panel"

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/login" element={<Logon/>}/>
        <Route path="/panel" element={<Panel/>}/>
      </Routes>
    </BrowserRouter>
  )
}