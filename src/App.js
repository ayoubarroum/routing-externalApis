import React from "react";
import KanyeAPI from "./containers/KanyeAPI";
import Home from "./pages/Home";
import NorrisAPI from "./containers/NorrisAPI";
import Nav from "./components/Nav";
import "./App.css";
import {BrowserRouter as Router, Route} from "react-router-dom";


function App() {
  return (
    <>
      
      <Router>
      <Nav />

<Route path="/" exact component={Home}/>
<Route path="/OhNoNorris" exact component={NorrisAPI}/>
<Route path="/KanyePets" exact component={KanyeAPI}/>
      {/* <Home /> */}
      {/* <NorrisAPI />
      <KanyeAPI /> */}
      </Router>
    </>
  );
}

export default App;
