import logo from './logo.svg';
import './App.css';
import { Component } from 'react';


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
      <UserList users = {this.state.users} />
    );
  }
}
export default App;
