import About from './about';
import Nav from './nav';
import Shop from './shop';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import ItemDetails from './itemDetails';
import Home from './Home';
const App = () => {
  return (
    <div className="App">
     <Router>
     <Nav />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="about" component={About}/>
      <Route exact path="/shop" component={Shop}/>
      <Route exact path="/shop/:id" component={ItemDetails}/>
      <Route path="*">
        <h1>page not found</h1>
      </Route>
    </Switch>
    </Router>
    </div>
  );
};
export default App;