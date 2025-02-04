import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import SellWithMe from "./pages/SellWithMe";
import Navbar from "./components/Navbar";
import { Toaster } from "./components/ui/toaster";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-with-me" element={<SellWithMe />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;