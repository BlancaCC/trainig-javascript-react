import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';




class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange (event) {
        this.setState({value: event.target.value}); 
        event.preventDefault();

    }

    handleSubmit(event) {
        alert('Good and properous morning ' + this.state.value);
        event.preventDefault();
    }

    render( ){
        return(
            <div>
                <h2 id="head"> We are spying {this.state.value}</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Name: 
                        <input type="text" 
                        value = {this.state.value} 
                        onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }

} 

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);