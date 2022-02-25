import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Profile from "./components/profile/Profile"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header"
import Postinput from "./components/home/PostInput"

function App() {
  return (
    <Router >
      <div className="App">
        <Header />

        <Routes>
          <Route path="/me" />
          <Route path="/" element={<Home />} exact></Route>
          <Route path="/profile/:username" element={<Profile />}></Route>
        </Routes>
      </div>
      {/* <div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
      <script>
            VANTA.WAVES({
              el: "#backgroundapp",
              mouseControls: true,
              touchControls: true,
              gyroControls: false,
              minHeight: 200.00,
              minWidth: 200.00,
              scale: 1.00,
              scaleMobile: 1.00,
              color: 0x20d50,
              shininess: 76.00,
              waveSpeed: 0.50,
              zoom: 1.16
            })
      </script></div> */}
    </Router>
    
  );
}

export default App
