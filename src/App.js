import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import './index.css';


function Home() {
  return <h2>Welcome to the Cake Shop 🎂</h2>;
}

function About() {
  return <h2>About Us</h2>;
}

function Cakes() {
  return <h2>Our Cakes 🍰</h2>;
}

function Contact() {
  return <h2>Contact Us 📞</h2>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cakes" element={<Cakes />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
