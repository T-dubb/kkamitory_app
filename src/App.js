import React, {Component} from 'react';
import Navigation from './components/nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Posts from './components/Posts/Posts.js'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Navigation/>
        <article class="content-article">
          <Switch>
            <Route exact path="/">
              <div>main</div>
            </Route>
            <Route exact path="/posts">
              <Posts/>
            </Route>
            <Route exact path="/report">
              <div>report</div>
            </Route>
            <Route exact path="/reserve">
              <div>reserve</div>
            </Route>
          </Switch>
        </article>
      </BrowserRouter>
    );
  }
}
export default App;
