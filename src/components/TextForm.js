import React, {useState} from 'react'
import PropTypes from 'prop-types'



export default function TextForm(props) {

  const [text, setText] = useState("")
  // here text is a state varible
  // setText is a function to update var text
  // useState is a react hook

  const handleOnChange = (event) =>{
    setText(event.target.value);  //allows to write text in textbox
    
  };

  const handleOnClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.alertFunc('success', 'The text was converted to uppercase!')
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase(); 
    setText(newText);
    props.alertFunc('success', 'The text was converted to lowercase!')
  }

  const handleCap = () => {
    let newText = "";
    const arr = text.split(" ")
    arr.forEach(element => {
      newText += element.charAt(0).toUpperCase() + element.slice(1).toLowerCase() + " ";
    })
    setText(newText);
    props.alertFunc('success', 'The text was capitalized!')
  }

  const handleCopy = () => {
   let texxt = document.getElementById("myBox");
   texxt.select();
   navigator.clipboard.writeText(texxt.value) //Learn about navigator
   props.alertFunc('success', 'The text was copied!')
  }


  const handleClear = () => {
    setText('');
    props.alertFunc('success', 'The text was cleared!')
  }


  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea rows="8" className='form-control' id="myBox" value={text} onChange={handleOnChange}></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick} style={{backgroundColor:props.btnColor, color:props.btnTextColor, borderColor: props.btnBorderColor}}>Convert to Uppercase</button>


      <button className="btn btn-primary mx-1" onClick={handleLowClick} style={{backgroundColor:props.btnColor, color:props.btnTextColor, borderColor: props.btnBorderColor}}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleCap} style={{backgroundColor:props.btnColor, color:props.btnTextColor, borderColor: props.btnBorderColor}}>Capitalize</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy} style={{backgroundColor:props.btnColor, color:props.btnTextColor, borderColor: props.btnBorderColor}}>Copy</button>
      <button className="btn btn-primary" onClick={handleClear} style={{backgroundColor:props.btnColor, color:props.btnTextColor, borderColor: props.btnBorderColor}}>Clear</button>
    </div>
    <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p> {text.split(".").length - 1} sentences , {text.split(" ").length} words  and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}



TextForm.propTypes ={
    heading: PropTypes.string.isRequired
};

TextForm.defaultProps = {
    heading : "The heading goes here"
}
