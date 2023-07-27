import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import SetAvatar from "./pages/SetAvatar";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<Chat/>} />
        <Route path="/setavatar" element={<SetAvatar />} />
      </Routes>
    </Router>
  )
}

export default App