//import logo from './logo.svg';
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
 import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar title="MyApp" aboutText="About US"/> */}
      <Navbar />
      <div className="container">
        <TextForm heading="Enter the text to analyze"/>
        <About/>
      </div>
    </>
  );
}

export default App;

// <>
// <div className="App">
//   <header className="App-header">
//     {/* <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React with Atindra
//     </a> */}
//     <h2>Welcome to the Site</h2>
//   </header>
// </div>
// </>
