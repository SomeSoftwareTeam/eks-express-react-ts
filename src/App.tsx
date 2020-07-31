// https://reactjs.org/docs/hooks-intro.html
import React from 'react';
// https://reactrouter.com/web/guides/quick-start
import {BrowserRouter, Route, Switch} from "react-router-dom";
// mine
import './App.css';
import {ReactAdminHal} from "./components/ReactAdminHal";
import MyVoyager from "./components/MyVoyager";
import MyMapbox from "./components/MyMapbox";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/schema">
            <MyVoyager/>
          </Route>
          <Route exact path="/map">
            <MyMapbox/>
          </Route>
          <Route path="/">
            <ReactAdminHal/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
