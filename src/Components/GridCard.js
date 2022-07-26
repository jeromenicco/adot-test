import React from 'react'
import ToggleBtn from '../UI/ToggleBtn'

import './GridCard.css'
import '../UI/ToggleBtn.css'

const GridCard = ({ destination, index, contextData }) => {
  return (
    <div className='card-container'>
      <div className='image-container'>
        <img src={destination.imageLink} alt={destination.imageLink}/>
      </div>
      <div className='card-details'>
        <div className='info-top-container'>
          <div className='info-title'>
            <h3>{destination.destination}</h3>
            <p>{destination.address}</p>
          </div>
          <ToggleBtn index={index} contextData={contextData} />
        </div>
        <div className='info-bottom-container'>
          <div className='info-item'>
            <p className='info-number'>{destination.population}</p>
            <p className='info-label'>Habitants</p>
          </div>
          <div className='info-item'>
            <p className='info-number'>{destination.hotels}</p>
            <p className='info-label'>Hôtels</p>
          </div>
          <div className='info-item'>
            <p className='info-number'>{destination.income}</p>
            <p className='info-label'>Revenu moy</p>
          </div>
          <div className='info-item'>
            <p className='info-number'>{destination.size}</p>
            <p className='info-label'>Km2</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridCard