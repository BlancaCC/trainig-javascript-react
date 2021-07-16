import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


function UserGreeting(props) {
  return <h1> Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1> Please sign up.</h1>
}

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn;
  if( isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}


function LoginBotton(props){
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}



function LogoutButton(props){
  return (
    <button onClick={props.onClick}>
      Logout     
    </button>
  );
}


class LoginControl extends Component {
  constructor(props) {
    super(props);
  
    this.handleLoginClick =
      this.handleLoginClick.bind(this);
    this.handleLogoutClick = 
      this.handleLogoutClick.bind(this);

    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn:true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn:false});
  }



  render(){
    const isLoggedIn = this.state.isLoggedIn;
    let button; 

    if(isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginBotton onClick = {this.handleLoginClick} />;
    }


    return (
        // why we don't write this.isLoggedIn
      <div id='message'>
        <Greeting isLoggedIn = {isLoggedIn} />
        {button}
      </div>
    );
  }
}


ReactDOM.render(
  <LoginControl />,
document.getElementById('root')
)