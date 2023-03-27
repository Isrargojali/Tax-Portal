import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Ticket from "./components/Ticket/Ticket";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";
import Dash from "./components/Dashboard/Dash";
import About from "./components/About/About";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>

          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
          </Routes>
          <Routes>
            <Route path="/register" element={<Ticket />} />
          </Routes>
          <Routes>
            <Route path="/dash" element={<Dash />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
