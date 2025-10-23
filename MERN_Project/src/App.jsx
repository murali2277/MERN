import { Component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Count from "./components/Count";
import Like from "./components/Like";
import Nav from "./components/Nav";
import Example from "./components/Useeffect";

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
       <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/count" element={<Count />}></Route>
        <Route path="/likes" element={<Like />}></Route>
        <Route path="/useeffect" element={<Example />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
