import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import App from './App';

import Navigation from './components/NavBar';
import Frontpage from './pages/Frontpage';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';


// import Footer from './component/footer';




ReactDOM.render(
    <Router>
      <Navigation />
      <App>
        <Switch> 
        <Route path='/' exact component={Frontpage} />
        <Route path='/portfolio' component={Portfolio} />
        {/* <Route path='/resume' component={Resume} /> */}
        <Route path='/gallery' component={Gallery} />
        <Route path='/contact' component={Contact} />
        </Switch>
         {/*<Footer /> */}
      </App>
    </Router>,
    
  
    document.getElementById("root")
  );
