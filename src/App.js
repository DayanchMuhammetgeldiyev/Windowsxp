import './App.css';
import {BrowserRouter} from "react-router-dom"
import Footer from './components/Footer';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
