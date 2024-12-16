import logo from './logo.svg';
import '../src/template/onepirate/css/App.css';
import Home from './template/onepirate/pages/Home';
import Navbar from '../src/template/onepirate/modules/components/Navbar';
import { Routes, Route } from "react-router-dom";
import SignUp from '../src/template/onepirate/pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/about" element={} /> */}
      </Routes>
    
    </div>
  );
}

export default App;
