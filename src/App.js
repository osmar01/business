import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import BusinessInsert from './pages/business/business-insert';
import BusinessEdit from './pages/business/business-edit';
import BusinessList from './pages/business/business-list';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/'} className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Criar</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <Switch>
              <Route exact path='/create' component={ BusinessInsert } />
              <Route path='/edit/:id' component={ BusinessEdit } />
              <Route path='/index' component={ BusinessList } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;