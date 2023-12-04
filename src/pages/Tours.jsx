import React from 'react';
import {useEffect, useState} from 'react'
import {getData, fetchData} from '../utility.js'
import './Tours.css'
import { Card } from '../components/Card.jsx';

const url='https://raw.githubusercontent.com/mkatay/json-tours/main/tours'

export const Tours = () => {
    const [tours, setTours]=useState([])
    useEffect(()=>{
        fetchData(url, setTours)
    },[])
console.log(tours)
    return (
        <div className='components-container'>
            <h2>Current travel destinations</h2>
            <div className='card-holder'>
                {tours.map(obj=><Card key={obj.id} {...obj}/>)}
            </div>
        </div>
    );
};