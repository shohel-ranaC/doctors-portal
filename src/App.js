//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';


function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/appointment" element={<Appointment />} />

     </Routes>
    </BrowserRouter>
  );
}

export default App;
