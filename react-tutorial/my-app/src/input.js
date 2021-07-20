import React, {useCallback, useEffect, useState} from 'react';  
import './styles/input.css';


function StringToMimi (txt) {

    const changes = {'a':'i', 'e':'i', 'o':'i', 'u':'i'};

    Object.keys(changes).forEach( letter => 
        txt = txt.replace(letter, changes[letter]));
    //alert(txt);
    return txt; 

}

function  Mimifiquidir() {

    const [mimiIn, setMimiIn] =useState(
    'Write here the text that is going to me mimificated');

    const [mimiOut, setMimiOut] = useState (StringToMimi(mimiIn));

    const handleChange = 
        (event) => {
            let ms = event.target.value;
            setMimiIn(ms);
             ms = StringToMimi(ms);
            setMimiOut(ms);
            
        };
    return ( 
        <div className='section'>
           <h2 className='Subtitle'> Mimifiquidir </h2>
           <h5> Write down the text you want to mimifiquidir: </h5>
           <div className='wrapMimifiquidir'>
                <textarea
                    className='MimifiquidirInput'
                    type='text'
                    name='msToMimi'
                    onChange={handleChange}
                    value={mimiIn}
                >
                    {mimiIn}
                </textarea>
                <p className='MimifiquidirOutput'> {mimiOut}</p>
            </div>
        </div>
     );

}

const MimifiquidirObjetives = [
    'Handle events and form with hooks'
];

export {Mimifiquidir, MimifiquidirObjetives};