import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'

import { ObjetivesFromList } from './util';
import {Title, TitleObjetive} from './title.js';
import {Table, dataTable, Objective} from './firstTable.js';
import {FetchContent, FetchObjetives} from './fetch.js';


function Structure (props) {
    return(
        <div className='SplitPaneRow'>
            <div className='SplitPane-left'>
               {props.left}
            </div>
            <div className='SplitPaneCol-right'>
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
            left={  <TitleObjetive />}
        />
        <Structure
            right={
                <Table
                rows={dataTable} 
                columnNames={['name', 'email']}  />
            }
            left = {<Objective/>}
        />
        <Structure
            right={<FetchContent />}
            left={ <ObjetivesFromList 
                    objectives={FetchObjetives} />}
        />
        </>
    );
}

            //left = {<firstTableObjective/>}
ReactDOM.render(
    <App />, 
    document.getElementById('root'));


