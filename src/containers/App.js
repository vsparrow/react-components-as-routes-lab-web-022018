import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  // console.log(props); //is {}
  return (

    <Router>
    <div>
    {/*<Route exact path="/" render={Home} />*/}
    <NavBar />
    <Route exact path="/" render={Home}/>
    <Route exact path="/movies" render={Movies}/>
    <Route exact path="/directors" render={Directors}/>
    <Route exact path="/actors" render={Actors}/>
    </div>
    </Router>
  );
};

export default App
//  Navbar
//  and 4 React Router Route components with paths to
//   /, /movies, /directors & /actors
//   and has a props of the corresponding component.
// When a user visits the root url, they should see the Home component.
