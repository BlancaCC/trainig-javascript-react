import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';



class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false};


    // add a callback 
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState( prevState => ({ 
      isToggleOn: !prevState.isToggleOn
    }));
  }

render() {
  return (
    <button onClick={this.handleClick}>
      {this.state.isToggleOn ? 'ON' : 'off'}
    </button>
  );
}
}



ReactDOM.render(
    <Toggle />,
  document.getElementById('root')
);
