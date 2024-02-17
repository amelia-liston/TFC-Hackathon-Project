import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <body>
        <Router>
          <navbar />
          <Switch>
            <Route path="/pages/Profile" exact component={Profile} />
            <Route path="/pages/Feed" component={Feed} />
            <Route path="/pages/More" component={More Info} />
          </Switch>
        </Router>
        <h1>Get Civic</h1>
      </body>
    </>
  );
}

export default App;
