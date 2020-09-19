import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LevelOne from "./pages/LevelOnePage";
import LevelTwo from "./pages/LevelTwoPage";
import LevelThree from "./pages/LevelThreePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/level1">
            <LevelOne />
          </Route>
          <Route path="/level2">
            <LevelTwo />
          </Route>
          <Route path="/level3">
            <LevelThree />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
