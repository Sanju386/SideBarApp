
import React from "react"
import Sidebar from "./Sidebar"
import { Routes, Route } from "react-router-dom"
import Projects from "./routes/Projects"
import Calendar from "./routes/Calendar"
import Documents from "./routes/Documents"
import Home from "./routes/Home"
import Team from "./routes/Team"



function App() {
  

  return (
    <>
      <Sidebar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/team" element={<Team/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/calendar" element={<Calendar/>}/>
  <Route path="/documents" element={<Documents/>}/>
</Routes>

    </>
  )
}

export default App
