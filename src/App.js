import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Postinput from "./components/home/PostInput"


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        
          
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
