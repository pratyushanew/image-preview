import React from "react";
import './App.css';
import Home from "./components/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Upload from "./components/Upload";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/upload" component={Upload}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;