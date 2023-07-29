import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import { Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import BasicExample from './BasicExample';
import Footer from './Footer';
// import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <>
      <BasicExample />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/" component={Home} />

      </Switch>
      <Footer/>

    </>

  );
}

export default App;
