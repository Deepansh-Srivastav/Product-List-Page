import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from './HOME/Home';
import Mobile from "./Mobile";
import Laptop from "./Laptop";
import Mouse from "./Mouse";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/SmartPhones' element={<Mobile />} />
          <Route path='/Laptops' element={<Laptop />} />
          <Route path='/Monitors' element={<Mouse />} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


