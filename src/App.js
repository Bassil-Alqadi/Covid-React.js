import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import Layout from './Components/Layout/Layout';
import Intro from './Components/Intro/Intro';
import Jumbtron from './Components/Jumpotron/Jumpotron';
import Global from './Components/Global/Global';
import GlobeComponent from './Components/GlobeComponent/GlobeComponent';
import Developer from './Components/Developer/Developer';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Layout />
        <Switch>
          <Route path="/made-by" component={Developer} />
          <Route path="/search-by-country" component={Intro} />
          <Route path="/global" component={Global} />
          <Route path="/globe-results" component={GlobeComponent} />
          <Route path="/" exact component={Jumbtron} />
        </Switch>
      </div>
    );
  }
}

export default App;
