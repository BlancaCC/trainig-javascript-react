import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * For json source: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
 * To use the fetch: https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
 * React table: https://blog.logrocket.com/complete-guide-building-smart-data-table-react/  
 * 
 */

/*
function Table (props) {

  const 
  return 
}
*/

function Arrow(json, head) {
return (
  <tr key={json.id}>
    head.map((e) => 
      <td> json[e]</td>
    ))
  </tr>
);
}

DATAS = [
  {
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }];

class App extends Component {

constructor(props) {
  super(props);
  this.url = 'https://jsonplaceholder.typicode.com/posts/1/comments';
  this.state = {comments:null};
  this.head = ['postId','name', 'email'];
  
}

componentDidMount() {
  fetch( this.url, {credentials: 'omit'})
    .then(response => response.json())
    .then(data => {
      //this.setState({comments: data});
      //console.log('the length is ' + data.length);

   
        let component = DATAS.map(//data.map(
          (e)=> Arrow({'id':Math.random(), 'postId':1,'name':'aa', 'email':3}, this.head)
        );
 
        this.setState({comments: component});
   
    })
  }

  render(){

    let data = '';
    try{
    data = this.state.comments[0].keys();
    }catch(error){
      data = 'void';
    }
    return ( 
      <div>
        <h1> Hola </h1>
        <table key='1'>
          {this.state.comments }
        </table>  
          NEEDED TO CREATE A TABLE OBJECT 
        
      </div>
    );
    
  }
}


export  default App; 

