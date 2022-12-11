import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Footer from './components/Footer';
import Login from './page/login/Login';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
         <Route path="/login" element={<Login />}/>
       </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
