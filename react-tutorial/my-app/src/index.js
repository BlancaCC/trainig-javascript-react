import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'

import {Title, TitleObjetive} from './title.js';
import {Table, dataTable, Objective} from './firstTable.js'


function Structure (props) {
    return(
        <div className='SplitPane'>
            <div className='SplitPane-left'>
               {props.left}
            </div>
            <div className='SplitPane-right'>
               {props.right}
            </div>
        </div>
    )
}

function App() {
    return (
        <>
        <Structure
            right={<Title />}
            left={<TitleObjetive />}
        />
        <Structure
            right={
                <Table
                rows={dataTable} 
                columnNames={['name', 'email']}  />
            }
            left = {<Objective/>}
        />
        </>
    );
}

            //left = {<firstTableObjective/>}
ReactDOM.render(
    <App />, 
    document.getElementById('root'));


