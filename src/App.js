// import logo from "./logo.svg";
import "./App.css";
import About from "./Componants/About";
import Navbar from "./Componants/Navbar";
import Textform from "./Componants/Textform";


function App() {
  return (
    <>
    {/* in props we can pass the value in the componant and it can be render */}
    <Navbar title="Textutils1" about="About us"/>
    <div className="container my-3">
    <Textform heading="Enter the Text to Analysis"/>
    <About/>
     </div>
    </>
  );
}

export default App;
