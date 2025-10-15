import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Count from "./components/Count";

function App() {
  const [count, setCount] = useState(0);

  // function Greeting(props){
  //   return (
  //   <h1>Hello {props.name}, you are {props.age} year old!</h1>
  //   );
  // }

  return (
    // {/* <Greeting name="Murali" age={20} /> */}
    <Router>
      <nav className="navbar">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/count">
          Count
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/count" element={<Count />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
