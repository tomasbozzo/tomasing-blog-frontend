import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import './App.css';
import Blog from './containers/Blog/Blog';

class App extends Component {

  click = () => {
    console.log('Click');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path="/" component={Blog} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
