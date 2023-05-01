// create state
// hooks it is finction based componant
import React, { useState } from "react";

export default function Textform(props) {
  // using this function if we can clicked the convert uppercase button the value in the textbox convert to thr uppercase

  const handleupClick = () => {
    let newText = text.toLocaleUpperCase();
    // we want to change the state then we use this function
    setText(newText);
  };
  const handlelowClick = () => {
    let newText = text.toLocaleLowerCase();
    // we want to change the state then we use this function
    setText(newText);
  };

  
  const speak =() =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
  }
  const clear =() =>{
    let clr = " ";
    setText(clr);
  }

  const capital =() =>{
    // let str =text;
    let arr=text.split(" ");
     arr= arr.reverse();
     let newtext =arr.join();
     setText(newtext);
  }

  // uisng this function we can add text
  const handleOnChange = (event) => {
    setText(event.target.value);                        
  };


  const [text, setText] = useState("");
  return (<>
    <div className="Container">
      {/* //we can assign the props */}
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label for="MyTExt" class="form-label">
            Enter text
            </label> */}
        <textarea
          className="form-control"
          // in this value we can set the text value using state
          value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
      </div>
      <button type="button" className="btn btn-primary mx-2" onClick={handleupClick}>Uppercase </button>
      <button type="button" className="btn btn-primary mx-2" onClick={handlelowClick}>Lowercase </button>
      <button type="button" className="btn btn-primary mx-2" onClick={speak}>Speak</button>
      <button type="button" className="btn btn-primary mx-2" onClick={capital}>Reverse</button>
      <button type="button" className="btn btn-danger mx-2" onClick={clear}>Clear</button>
    </div>

    <div className="className my-3">
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008*text.split(" ").length} Minute Word</p>
      <h3>Preview</h3>
      <p>{text}</p>      
    </div>
    </>
  );
}
