import React from 'react';
import ReactDOM from 'react-dom';
import Logout from './components/logout/Logout.jsx';
import Login from './components/login/Login.jsx';
import Signup from './components/signup/Signup.jsx';
import NavBar from './components/NavBar.jsx';

import {
  HashRouter,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      loggedIn: false
    };
  }
  /**
   * toggles the state of loggedIn to the
   * value of the boolean it is passed
   * should be bound to App before being passed on
   *
   * input: true || false
   * output: none
   */
  toggleLogin(state) {
    this.setState({loggedIn: state});
  }

  /**
   * renders the body of the App
   * contains conditionally rendered components when not logged in:
   * Sign up && Login
   *
   * and when logged in:
   * Logout
   * As well as a navigation bar as a hash router for all
   * feature supporting components
   */
  render() {
      return (
        <div>
          <HashRouter>
            {/* Top Bar */}
            <div className="top">
              <div className="w3-bar w3-blue w3-left-align w3-large">
                <Link to="/login" style={this.state.loggedIn ? {display:'none'} : {} } className="w3-button w3-padding-large w3-white">Login</Link>
              </div>


            {/* First Grid */}
            <header className="w3-container w3-blue w3-center" id="homeheader" style={this.state.loggedIn ? {display:'none'} : {} }>
              <h1 className="w3-margin w3-jumbo">Pop-Up-Games</h1>
              <p className="w3-xlarge">Play Games! Have Fun!</p>
              <Link to="/signup" style={this.state.loggedIn ? {display:'none'} : {} }  className="w3-button w3-white w3-padding-large w3-large w3-margin-top">Sign Up</Link>
            </header>
            <Route path="/login"
              render={props => <Login
                loggedIn={this.state.loggedIn}
                toggleAuth={this.toggleLogin.bind(this)} {...props} />} />
            <Route path="/signup"
              render={props => <Signup />} />

            {/* Second Grid */}

            <div className="w3-row-padding w3-padding-64 w3-container" style={this.state.loggedIn ? {display:'none'} : {} }>
              <div className="w3-content">
                <div className="w3-twothird">
                  <h1>What We Do</h1>
                  <h5 className="w3-padding-32 w3-text-grey" >We here love sports and we want to make it fun and easy to find sport games in your local area. Use our site to find and join games near. Or go on and create your own! Go out and have fun!</h5>

                </div>

                <div className="w3-third w3-center">
                  <img src='./img/basketballcartoon.png' height="200" />
                </div>
              </div>
            </div>

              <Route path="/logout"
              render={props => <Logout
                toggleAuth={this.toggleLogin.bind(this)} {...props} />} />
            </div>
          </HashRouter>
          <div style={this.state.loggedIn ? {} : {display:'none'} } >
            <NavBar/>
          </div>
        </div>
        )
  }

}

ReactDOM.render(<App />, document.getElementById('app'));
