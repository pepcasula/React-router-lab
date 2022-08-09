import React from 'react';
import {useParams} from 'react-router-dom';

const Choice = () =>{
    const { choice }  = useParams()

    return (
        <>
            <h1>Your choice is {choice}</h1>
            <p>You're on page {choice}</p>
        </>
    )
}

export default Choice;