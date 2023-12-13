
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Animal from './Pages/Animal';

import UserTable from './Pages/User';
import SignInSide from './Pages/LoginPage';
import Register from './Pages/RegisterPage';
import AdoptionForm from './Pages/AdoptionForm';
import Home from './Pages/Home';

function App() {
  
  return (

 
       <Routes>
        <Route path="/animal" element={<Animal/>} />
        <Route path="/userInfo" element={<UserTable/>} />
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/adoptionform" element={<AdoptionForm/>} />
        <Route path="/home" element={<Home/>} />
       </Routes>
    
  );
}

export default App;



