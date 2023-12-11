import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInSide from './pages/loginpage';
import Register from './pages/registerpage';
import AdaptionForm from './pages/adoptionform';
function App() {

  return (
       <Routes>
        <Route path="/login" element={<SignInSide/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/adaptionform" element={<AdaptionForm/>} />
       </Routes>
  );
}

export default App;
