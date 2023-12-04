import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'

export const Card = ({id, image, info, name, price}) => {
    let truncatedInfo = info.substring(0,150)

    const navigate = useNavigate()
  return (
    <div className='card'>
        <img src={image} alt={name} />
        <div className='card-content'>
            <h3>{name}</h3>
            <p>{truncatedInfo}</p>
            <button className='details-btn' onClick={()=>navigate('/traveller/tour/'+id)}>Details</button>

        </div>
    </div>
  )
}

