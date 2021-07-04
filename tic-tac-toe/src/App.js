import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CreateGame from "./create-game";

import Home from "./home"
import Nav from "./nav"
const App = () => {
  document.title ='tic tac toe'
  return ( 
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/new-game" component={CreateGame}/>
      </Switch>
    </Router>
   );
}
 
export default App;