import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar";
import './components/index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IssTracker from "./components/IssTracker";

function App() {
  return (
    
    
    <div>
      <Router>
          <NavBar/>

          <Switch>

          <Route exact path='/' component={Homepage} />
          <Route path='/tracker' component={IssTracker} />
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
