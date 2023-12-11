
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Animal from './Pages/Animal';

import UserTable from './Pages/User';
import SignInSide from './Pages/loginpage';
import Register from './Pages/registerpage';
import AdaptionForm from './Pages/adoptionform';











function App() {
  
  return (

 
       <Routes>
        <Route path="/animal" element={<Animal/>} />
        <Route path="/table" element={<UserTable/>} />
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/adaptionform" element={<AdaptionForm/>} />
       </Routes>
    
  );
}

export default App;



