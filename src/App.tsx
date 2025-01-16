import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Index from "./pages/Index";
import About from "./pages/About";
import SellWithMe from "./pages/SellWithMe";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/sell-with-me" element={<SellWithMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;