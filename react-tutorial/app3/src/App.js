import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**
 * For json source: https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components
 * To use the fetch: https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
 * React table: https://blog.logrocket.com/complete-guide-building-smart-data-table-react/  
 * React key: https://es.reactjs.org/docs/lists-and-keys.html  
 * css: https://www.w3schools.com/Css/css_table.asp
 */

/*
function Table (props) {

  const 
  return 
}
*/

/*
function Arrow(json, head) {
  return (
    <tr key={json.id}>
      {
        head.map((e) => 
          <td> json[e]</td>
        )
      }
    </tr>
  );
}

const dataTable = [
  {0:{
    "postId": 1,
    "id": 1,
    "name": "id labore ex et quam laborum",
    "email": "Eliseo@gardner.biz",
    "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  }},
  {1:{
    "postId": 1,
    "id": 2,
    "name": "quo vero reiciendis velit similique earum",
    "email": "Jayne_Kuhic@sydney.com",
    "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  }}];

function Table2 (props){
  console.log(props.DATAS)
  const cleanData = null; 
  const tableData = ['name', 'email'];
  const table = (
    <table>
      <tr>
        {
          tableData.map((column)=>
          <th key={column}>
            {column}
          </th>
          )
        }
      </tr>

   {
        
        props.DATAS.map( (arrow) => 
        <tr key={arrow.id}>
          {
            tableData.map( (column)=> (
                <td key={column}>
                  {arrow[column]}
                </td>
              )
            )
          }
        </tr>
        )
      }

    </table>
  );

  return table; 
}




function Columnas (props) {
  let l = null; 
}
function Table (props){
  console.log(props.DATAS)

  const tableData = ['name', 'email'];
  const table = (
    <table>
      <tr>
        {
          tableData.map((column)=>
          <th key={column}>
            {column}
          </th>
          )
        }
      </tr>

   {
        props.DATAS.map( (arrow) => 
        <tr key={arrow.id}>
          {
            tableData.map( (column)=> (
                <td key={column}>
                  {arrow[column]}
                </td>
              )
            )
          }
        </tr>
        )
      }

    </table>
  );

  return table; 
}


function eliminateIndex (ms) {
return Array.from({length: ms.length}, (_, i) => i+1).map( i => ms[i])
}

class App extends Component {

constructor(props) {
  super(props);
  this.url = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  this.state = {table: <h1>Future table</h1>};
   
}

componentDidMount(){
  
  fetch(this.url)
    .then(response => response.json())
    .then((ms) => { 
      console.log(ms);
      
      this.setState({table: eliminateIndex(ms)})
      
    });
    
}

  render() {
    return ( 
      <div>
        <h1> Hola </h1>
        <Table DATAS={eliminateIndex( dataTable)}/>
        <h1>The table conten is</h1>
       {this.state.table}
      </div>
    );
    
  }
}

*/
//export  default App; 

