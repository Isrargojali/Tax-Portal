import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Ticket from "./components/Register/Ticket";
import SignUp from "./components/Signup/SignUp";
import Dash from "./components/Dashboard/Dash";
import Footer from "./components/footer/Footer";
import DashTwo from "./components/dahshbordtwo/DashTwo";
import AboutCard from "./components/card/AboutCard";
import Video from "./components/Video/Video";
import Carousel from "./components/Carousel/Carousel"
function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/video" element={<Video />} />
          </Routes>
          <Routes>
            <Route path="/" element={<AboutCard />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Carousel />} />
          </Routes>
          <Routes>
            <Route path="/" element={<Footer />} />
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
          <Routes>
            <Route path="/dashtwo" element={<DashTwo />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
