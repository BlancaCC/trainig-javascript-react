import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/* 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

class User extends Component {
  render () {
    return (
      <li>
        {this.props.id} - {this.props.name}
      </li>
    );
  }
}

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
