import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';



class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }


  tick() {
    this.setState( {
      date: new Date()
    });
  }


  componentDidMount() {
  
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  render () {
    return (
      <div>
        <h1> Good and prosperous morning</h1>
        <h2> It is { this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


function App(){
  return (
    <div>
      <Clock />
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}
ReactDOM.render(
    <App />,
  document.getElementById('root')
);
