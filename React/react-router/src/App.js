import React from "react";
import {
  Switch,
  Route,
  Link 
} from "react-router-dom";

import Home from "./components/Home";
  import Word from './components/Word'
  import WordColor from './components/WordColor'
    
function App() {
  return (
<>
          <p>
        <Link to="/">Home</Link>
        {" | "}
        <Link to="/Hello">Word</Link>
        {" | "}
        <Link to="/77">Number</Link>
        {" | "}
        <Link to="/Hello/red/blue">Colored Word</Link>

      </p>
      <Switch>
        <Route exact path="/:varWN">
          <Word />
        </Route>

        <Route path="/:word/:fColor/:sColor">
          <WordColor />
        </Route>

        <Route  path="/">
          <Home />
        </Route>

      </Switch>
</>
  );
}
    
export default App;