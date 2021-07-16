import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';


let url = 'https://jsonplaceholder.typicode.com/posts/1/comments'



/*
const response = await fetch(url, {credentials: 'omit'})
  .then(response => response.json())
  .then(data => { 
      console.log(data);
      response =  data;
    });

console.log('Response value is ' + response);

*/
const dataTable = [
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

console.log(dataTable);

function Header (props) {
    const columnNames = props.columnNames;

    const head = columnNames.map( e => 
                    <th> {e}</th>
                );
    return (
        <thead>
            <tr> {head}</tr>
        </thead>
    );
}
function OneRow(props) {
    const row = props.row;
    const rowRender = props.columnNames.map( colunm =>
        <td> {row[colunm]}</td>);

    return rowRender;
}

function Table ( props) {

    const columnNames = props.columnNames;
    const rowsRender = props.rows.map( r =>
            <tr>
                <OneRow 
                    columnNames={columnNames}
                    row={r}
                />
            </tr>
        );
    
    return(
        <div>
            <h2> My table</h2>
        <table>
            <Header columnNames={columnNames} />
            {rowsRender}
    </table> 
    </div>  
    );

}


ReactDOM.render(
    <Table
        rows={dataTable} 
        columnNames={['name', 'email']} 
    />,
    document.getElementById('root')
);