import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './Modules/Home';
import About from './Modules/About';
import Contact from './Modules/Contact';
import PageNotFound from './Modules/PageNotFound';
import Employees from './Modules/Employees';
import Employee from './Modules/Employee';



function App() {
  return (
    <div className="App">
      <h3>012_AMOL BHARSAKLE_e-DAC_17</h3>
      <header className="">
        <Router>
          <h4 style={{paddingTop:10,paddingBottom:30,border:10,background:'darkgray',color:'white'}}> 
            <Link to="/">HOME</Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
            <Link to="/Employees">EMPLOYEE</Link>&nbsp;&nbsp;|&nbsp;&nbsp; 
            <Link to="/About">ABOUT US</Link> &nbsp;&nbsp;|&nbsp;&nbsp; 
            <Link to="/Contact">ABOUT US</Link> 
          </h4>
          <Switch>
              <Route exact path="/">
                  <Home />
              </Route>
              <Route path="/Employees">
                  <Employees />
              </Route>

              <Route path="/Employee/:empid">
                  <Employee />
              </Route>

              <Route path="/About">
                  <About />
              </Route>

              <Route path="/Contact">
                  <Contact />
              </Route>

              <Route path="/*">
                  <PageNotFound />
              </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
