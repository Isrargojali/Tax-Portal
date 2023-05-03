import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Ticket from "./components/Register/Ticket";
import SignUp from "./components/Signup/SignUp";
import Footer from "./components/footer/Footer";
import AboutCard from "./components/card/AboutCard";
import Video from "./components/Video/Video";
import Carousel from "./components/Carousel/Carousel";
import Faqs from "./components/Faqs/Faqs";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Dashboard from "./components/Dashboard/Dashboard";
import Accounts from "./components/Dashboard/Accounts";
import TaxForm from "./components/Dashboard/FormSide/TaxForm";
import StandardDeducton from "./components/Dashboard/FormSide/StandardDeducton";
import DigitalAssets from "./components/Dashboard/FormSide/DigitalAssets";
import Dependets from "./components/Dashboard/FormSide/Dependets";
import Income from "./components/Dashboard/FormSide/Income";
import Tax from "./components/Dashboard/FormSide/Tax";
import Payment from "./components/Dashboard/FormSide/Payment";
import Refund from "./components/Dashboard/FormSide/Refund";
import Amount from "./components/Dashboard/FormSide/Amount";
import ThirdForm from "./components/Dashboard/FormSide/ThirdForm";
import FormSign from "./components/Dashboard/FormSide/FormSign";
import Paid from "./components/Dashboard/FormSide/Paid";

function App() {
  return (
    <div className="App">
      <>
        <Router>
          {/* Navbar Routings */}
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
            <Route path="/" element={<Faqs />} />
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
            <Route path="/about" element={<About />} />
          </Routes>
          <Routes>
            <Route path="/services" element={<Services />} />
          </Routes>
          {/* Dashboard Routings */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/setting" />
            <Route path="/notification" />
            <Route path="/support" />
            <Route path="/taxform" element={<TaxForm />} />
            <Route path="/Digital" element={<DigitalAssets />} />
            <Route path="/Standard-deduction" element={<StandardDeducton />} />
            <Route path="/dependents" element={<Dependets />} />
            <Route path="/income" element={<Income />} />
            <Route path="/tax" element={<Tax />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/amount" element={<Amount />} />
            <Route path="/third" element={<ThirdForm />} />
            <Route path="/signhere" element={<FormSign />} />
            <Route path="/paid" element={<Paid />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
