//import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Appointment from './components/Appointment/Appointment/Appointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/AllPatients/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';


function App() {
  return (
   
    <BrowserRouter>
     <AuthProvider>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/appointment" element={<Appointment />} />
       <Route path="/dashboard/appointment" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
       <Route path="/dashboard/patients" element={<PrivateRoute> <AllPatients /> </PrivateRoute>} />
       <Route path="/dashboard/addDoctor" element={<AddDoctor />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />

     </Routes>
     </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
