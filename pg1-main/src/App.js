import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Av1 from "./Av1"
import Av2 from "./Av2"
import Av3 from "./Av3"
import Av4 from "./Av4"
import Home from "./Home"

function AppContent() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/av1" element={<Av1 />} />
        <Route path="/av2" element={<Av2 />} />
        <Route path="/av3" element={<Av3 />} />
        <Route path="/av4" element={<Av4 />} />
      </Routes>
    </div>
  );
}

export default function App(props) {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}