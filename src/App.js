// import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
// import About from "./Componants/About";
import Navbar from "./Componants/Navbar";
import Textform from "./Componants/Textform";


function App() {
  const [mode,setMode] = useState('dark');
  return (
    <>
    {/* in props we can pass the value in the componant and it can be render */}
    <Navbar title="Textutils1" about="About us" mode={mode}/>
    <div className="container my-3">
    <Textform heading="Enter the Text to Analysis" mode={mode}/>
    {/* <About/> */}
     </div>
    </>
  );
}

export default App;
