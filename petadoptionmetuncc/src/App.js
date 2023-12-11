
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Animal from './Pages/Animal';

import UserTable from './Pages/User';











function App() {
  
  return (

 
       <Routes>
        <Route path="/animal" element={<Animal/>} />
        <Route path="/table" element={<UserTable/>} />
       </Routes>
    
  );
}

export default App;



