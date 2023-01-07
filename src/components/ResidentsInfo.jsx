import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './residentsInfo.css'
import axios from 'axios';

const ResidentsInfo = ({resident}) => {

    const [character, setCharacter] = useState ({})

    useEffect (() => {
        axios.get(`${resident}`)
        .then ( res => setCharacter (res.data) )
    },[])

    console.log(character);

    const status = character.status
    
    const changeBgColorStatus = () => {
        if ( status === "Alive" ){
            return(
                <div className='status'>
                    <div className='bg-green'></div>
                    <p >{status}</p>
                </div>
            )
            
        }else if ( status === "Dead" ){
            return(
                <div className='status'>
                    <div className='bg-red'></div>
                    <p >{status}</p>
                </div>
            )   
        } else {
            return(
                <div className='status'>
                    <div className='bg-gray'></div>
                    <p >{status}</p>
                </div>
            )   
        }
        
    }
    //const position = (character.episode?.[0])?.lastIndexOf("/")
    //const episode = (character.episode?.[0])?.substring(position + 1)
    //{(character.episode?.[0])?.substring((character.episode?.[0])?.lastIndexOf("/") + 1)}

    return (
        <div className='character'>
            <img src={character.image} alt="" />
            <div className='information-character'>
                <h4>{character.name}</h4>

                {changeBgColorStatus ()}

                <div className='origin-information'>
                    <p>origin</p>
                    <h4>{character.location?.name}</h4>
                </div>
                <div className='episode-information'>
                    <p>episode where appear</p>
                    <h4>{character.episode?.length}</h4>
                </div>
            </div>
        </div> 
    );
};

export default ResidentsInfo;