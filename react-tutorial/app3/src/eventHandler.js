import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';




class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', selectValue: 'extremely-good'};
        //input
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //select 
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleSubmitSelect = this.handleSubmitSelect.bind(this);
    }

    //input's handle
    handleChange (event) {
        this.setState({value: event.target.value}); 
        event.preventDefault();

    }

    handleSubmit(event) {
        alert('Good and properous morning ' + this.state.value);
        event.preventDefault();
    }

    //select handle
    handleChangeSelect (event) {
        this.setState({selectValue: event.target.value});
    }
    handleSubmitSelect(event) {
        alert('I am really happy thant you are ' + this.state.selectValue);
        event.preventDefault();
    }

    render( ){
        return(
            <div>
                <h2 id="head"> We are spying {this.state.value}</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label>
                        Essay:
                        <br></br>
                        <textarea
                        value = {this.state.value} 
                        onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="submit" />
                </form>

                <form onSubmit={this.handleSubmitSelect}>
                    <label>
                        How do you feel ?
                        <br></br>
                        <select value = {this.state.selectValue}
                        onChange={this.handleChangeSelect}>
                            <option value= "good"> Good</option>
                            <option value="very-good"> Very good</option>
                            <option value = "extremely-good"> Extremely good</option>
                        </select>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }

} 

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);