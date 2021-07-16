/**
 *  Update a title:
 * Aim of this project: 
 *  - Learning hook: Effect Hook, State
 */

import React, { useState, useEffect } from "react";
import './styles/title.css'

function Title () {

    const subjects = ['React', 'css', 'html'];

    const [index, setIndex] = useState(0);
    const [subject, setSubject] = useState( subjects[0]);

    const title = `Getting into ${subject}`;

    // thanks to:  https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks


    useEffect( () =>  {

        const timer = setInterval(
            () => {
                setIndex( (index +1)  );
                setSubject( subjects[ index % subjects.length ]);
            },
            1600
        );

        //clear index in the component is updated
        return () => clearTimeout(timer);
    });
    return ( 
        <>
            <h1 className='Title'> {title} </h1>
            <p>

                The aim of this lovely title was to use hooks instead of classes,
             become used to effects and states. It has been fun
             but reach somthing aesthetic with CSS is hard.
</p>
    </>
    ); 
}

function TitleObjetive() {
    const objetives = [
        'Effective Hooks',
        'State Hooks'
    ];

    const component = objetives.map(o =>
        <li> {o} </li>);


    return (
        <>
        <h2> Applied concepts</h2>
        <ul className="Objective">{component}</ul>
  
        </>
    );
}


export { Title, TitleObjetive}; 