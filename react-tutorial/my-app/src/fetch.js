import React, {useState, useEffect} from 'react';


/**
 * References: 
 * (React fetch with classes)
 *  - https://www.robinwieruch.de/react-fetching-data
 * (Fetch with hooks)
 *  - https://www.robinwieruch.de/react-hooks-fetch-data
 */




function FetchContent(){

    const [data, setData] = useState( [] );
    const url = 'https://jsonplaceholder.typicode.com/posts/1/comments'; 

    useEffect( () => {
        fetch (url)
        .then( response => response.json())
        .then(data => setData(data));
    });
    return (
        <>
        <h2 className='Subtitle'> Fetch</h2>
        <p> 
            This content are the commets from this
            < a href='https://jsonplaceholder.typicode.com/posts/1/comments'> API</a>

        </p>
        <ul>
            {data.map( item => (
                <li key={item.id}>
                    {item.name}
                </li>
            ))}
        </ul>
        </>
    );
}


const FetchObjetives = [
    'Fecth using hooks'
];


export {FetchContent, FetchObjetives};