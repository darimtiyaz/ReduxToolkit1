
import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddEdit from "./components/AddEdit"
import Home from "./components/Home"
import View from "./components/View"

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/addPost" element={<AddEdit/>}/>
          <Route path="/update/:id" element={<AddEdit/>}/>
          <Route path="/view/:id" element={<View/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
