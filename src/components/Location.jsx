import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import './location.css'
import ResidentsInfo from './ResidentsInfo';

const Location = () => {

    const indexRandom = Math.floor( Math.random () * 126 ) + 1
    const [location, setLocation] = useState ({})
    const [value, setValue] = useState ("")
    
    useEffect (() => {
        
        axios.get (`https://rickandmortyapi.com/api/location/${indexRandom}`)
        .then ( res => setLocation ( res.data ) )    
    },[])
    
    console.log(location);

    const searchLocation = () => {
        axios.get (`https://rickandmortyapi.com/api/location/${value}`)
        .then ( res => setLocation ( res.data ) )    
    }

    const idValue = () => {
        if(value <= 126 && indexRandom <= 126 ){
            return (
                <>
                <h3>{location.name}</h3>
                <div className='information'>
                    <h3> <b>Type: </b>{location.type}</h3>
                    <h3> <b>Dimension: </b>{location.dimension}</h3> 
                    <h3> <b>Population: </b>{location.residents?.length}</h3>
                </div>
                <h3>Residents</h3>
                <ul className='residents'>
                    {   
                        location.residents?.map ( re => (
                            <ResidentsInfo  resident = {re} key = {re}/>
                        ))
                    }      
                </ul>
                </>
            )
        } else if ( value > 126 ){ 
            return (
            <h3 className='error-value'>En el mundo de Rick y Morty solo existen 126 planetas</h3>
            )
        }
        
    }

    return (
        <div className='location'>
            <input type="text" value={value}  onChange={e => setValue(e.target.value)} placeholder='Type a location...'/>
            <button onClick={ searchLocation }>Search</button>
            { idValue() }

        </div>
    );
};

export default Location;