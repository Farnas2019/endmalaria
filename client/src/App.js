import Home from "./components/home";
import Signin from "./components/login";
import Signup from "./components/signup";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"


function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
      <Route exact path={"/"}>
        <Home/>
      </Route>
      <Route path={"/login"}>
       <Signin/>
      </Route>
      <Route path={"/signup"}>
       <Signup/>
      </Route>
      </Switch>
      
      
    </div>
    </Router>
  );
}

export default App;
