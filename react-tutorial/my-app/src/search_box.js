
import React, {useState, useEffect} from 'react';

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
           <table className='FirstTable'>
               <Header columnNames={columnNames} />
               {rowsRender}
          </table> 
      </div>  
      );

}


function SearchBox() {
    const urlContent = 'https://jsonplaceholder.typicode.com/users/1/albums';
    const [data, setData] = useState([]);

    const header = ['id', 'title'];
    
    const Header = header.map(h => <th> {h} </th>);

    // Fetch data 
    useEffect( () => {
        fetch (urlContent)
        .then( response => response.json())
        .then(data => setData(data));
        
    });

    // Update table


    // components
    
    //return the component 
    return (
        <>
        <h2 className='Subtitle'> Search box </h2>
        <table>
            
            <tr>{Header} </tr>
            {data.map( d => 
                <tr>
                    {header.map(h =>
                    <td>{ d[h]}</td>
                    )}
                </tr>
            )}
        </table>
        </>
    );

}

const SearchBoxObjetives = [
    'Create a search box',
    'Multiple effects',
    'Skip effect'
];

export {SearchBox, SearchBoxObjetives};