import './App.css';
import Navbar from "./MyComponents/Navbar";
import TextForm from "./MyComponents/TextForm";
import About from "./MyComponents/About";
import { useState } from 'react';
import Alert from "./MyComponents/Alert";

// import {
//    BrowserRouter as Router,
//    Route,
//    Routes,
//    Link
//  }from "react-router-dom";
function App() {
const [mode, setMode] = useState('light');   //whether dark mode is enabled or not
const [alert, setAlert] = useState(null);

const showAlert =(message,type) => {
  setAlert({
    msg: message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const toggleMode = ()=> {
  if(mode === 'light'){
    setMode ('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert("Dark mode has been enabled","success");
    document.title = 'TextUtils - Dark Mode';
    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing Mode';       // this are the bad experience for the user (its shows in favicon part)
    // }, 2000);
    // setInterval(() => {
    //   document.title = ' Install TextUtils Now';
    // }, 1500);
  } else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
     showAlert("light mode has been enabled","success");
  }
};


  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} /> 
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Routes> */}
        {/* /users.-->.components.1
        /users/home.-->-->.components.2 */}
        {/* <Route exact Path="/about" element={<About/> }/>
        <Route  exact Path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analze below" mode={mode}/>} />
      </Routes> */}
      <TextForm showAlert={showAlert} heading="Enter the text to analze below" mode={mode}/> 
    </div>
    <About />
    {/* </Router>  */}
    </>
  );
}

export default App;
