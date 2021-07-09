import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/*
class User extends Component {
  render () {
    return (
      <li>
        {this.props.id} - {this.props.name}
      </li>
    );
  }
}
*/

function User (props){
  return (
    <li>
      {props.id} - {props.name}
    </li>
  );
}

/*
class UserList extends Component {
  render() {
    return (
      <ul>
        { this.props.users.map( 
          u => {
            return (
              <User
              id = {u.id}
              name = {u.name}
              />
            );
          }
        )}
      </ul>

    );
  }
}

*/

function UserList (props){
  return (
      <ul>
        {props.users.map( 
          u => {
            return (
              <User
              id = {u.id}
              name = {u.name}
              />
            );
          }
        )}
        </ul>
  );
}


/**
 * Diferences between class and function:  
 *  render + return  vs only  return 
 * this.props vs props
 */
class App extends Component {
  constructor () {
    super ();

    this.state = {
      users : [
        {id: 1, name: "blanca"},
        {id: 2, name: "miguel"}
      ]
    };
  }

  render() {
    return (
      <div>
        <UserList users = {this.state.users} />
      </div>
    );
  }
}


function tick( ) {
  const element = (
    <div>
      <h1> Good Morning !</h1>
      <h2> It is {new Date().toLocaleTimeString() }</h2>
    </div>
  )
  ReactDOM.render (
    element,
    document.getElementById('root')
  );
}

tick();
export default App; //this would overwrite the first tick ()

tick(); // this would override the App
setInterval(tick, 1000)

