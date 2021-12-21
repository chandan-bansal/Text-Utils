import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm'
import About from './components/About';
import Alert from './components/Alert'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) =>{
    setalert({
    msg: message,
    type: type})
  }

  setTimeout(showAlert, 2000)
  const togglemode = () =>{
    if(mode === "dark"){setmode("light"); document.body.style.backgroundColor = "white"; showAlert("Light mode", "success")}
    else{setmode("dark"); document.body.style.backgroundColor = "grey"; showAlert("Dark mode", "success")}
  }
  return (
    <div className="App" >
      <Router>
      <Navbar title='TextUtils' about = 'About Author' mode = {mode} togglemode={togglemode}/>
      <Alert alert = {alert}/>
      <Routes>
        <Route path="/about" element = {<About  mode = {mode}/>} />
        <Route path="/" element = {
            <div className='container'>
              <TextForm showAlert = {showAlert} title='Enter the text here' mode = {mode}/>
            </div>} />
          
      </Routes>
      </Router>
    </div>
  );
}

export default App;
