import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
// import { BrowserRouter, Route, Routes } from "react-router-dom";



// Function based component 
function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const [btnColor, setBtnColor] = useState('#007bff')
  const [btnTextColor, setBtnTextColor] = useState('white')
  const [btnBorderColor, setBtnBorderColor] = useState('#007bff')

  const showAlert = (type, text) => {
    setAlert({
      type: type,
      text: text
    })
    setTimeout(()=>{
        setAlert(null)
    }, 2000)
  }


  const coolMode = () =>{
    if (mode === 'light' || (mode === 'dark') ){
      setMode("cool");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = '#50ff6c';
      document.getElementsByTagName('textarea')[0].style.backgroundColor = 'black';
      document.getElementsByTagName('textarea')[0].style.color = '#50ff6c';

      //Alert
      showAlert('success', 'Cool mode was enabled!')

      //Btn Colors
      setBtnColor('black') 
      setBtnTextColor('#50ff6c')
      setBtnBorderColor('#50ff6c') 

      
    }

    if (mode === 'cool'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementsByTagName('textarea')[0].style.backgroundColor = 'white';
      document.getElementsByTagName('textarea')[0].style.color = 'black';

      showAlert('success', 'Cool mode was disabled!')
      
      //Btn Colors
      setBtnColor('#007bff')  //default of bootstap
      setBtnTextColor('white')
      setBtnBorderColor('#007bff')
    }
  }





  const toggleMode = () =>{
    if (mode === 'light' || (mode === 'cool')){
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      document.getElementsByTagName('textarea')[0].style.backgroundColor = 'black';
      document.getElementsByTagName('textarea')[0].style.color = 'white';

      showAlert('success', 'Dark mode was enabled!')

      //Btn Colors
      setBtnColor('black')  
      setBtnTextColor('white')
      setBtnBorderColor('white')

      
    }

    if (mode === 'dark'){
      setMode("light");
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.getElementsByTagName('textarea')[0].style.backgroundColor = 'white';
      document.getElementsByTagName('textarea')[0].style.color = 'black';

      showAlert('success', 'Dark mode was disabled!')

      //Btn Colors
      setBtnColor('#007bff')  //default of bootstap
      setBtnTextColor('white')
      setBtnBorderColor('#007bff')

    }
    

  }



  // Whenever switch of navbar is pressed a function should be triggered 
  // That function was prev defined in Navbar but now is being passed from App JS as props
  // In the above condition, its obvious that the function shoud now be defined at APP JS itself 
  // the function's default value and propstype could be given at Navbar but it should be passed from here, so the need of defining
  return (
    <>
{/* <BrowserRouter> */}
  <Navbar title="TextUtils" mode ={mode} toggleMode={toggleMode} coolMode={coolMode}/>


  <div className="container my-3">
    <Alert alert={alert} />

    {/* <Routes> */}

      {/* <Route exact path="/" element={ */}
      <TextForm heading="Enter The Text To Analyze Below:" alertFunc = {showAlert} btnColor = {btnColor} btnTextColor= {btnTextColor} btnBorderColor={btnBorderColor}/>
      {/* }></Route> */}

    {/* <Route exact path="/about" element={<About/>}></Route> */}

    {/* </Routes> */}


  </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
