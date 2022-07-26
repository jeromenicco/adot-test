import React, { useEffect, useContext } from 'react'
import GridCard from './GridCard'
import LocalStorageContext from '../Contexts/LocalStorageContext'

import './DestinationsGrid.css'

const DestinationsGrid = () => {
  const { contextData, setContextData, useLocalStorage } = useContext(LocalStorageContext)
  const [storageData] = useLocalStorage('Destination', '')

  useEffect(() => {
    if(storageData){
      setContextData(storageData)
    }
  }, [storageData, setContextData])
  
  return (
    <div className='grid-container'>
      {
        contextData.length > 0 && (
          contextData.map((destination, index) => {
            return (
              <GridCard
                key={index}
                destination={destination} 
                index={index}
                contextData={contextData}
              />
            )
          })
        )
      }
    </div>
  )
}

export default DestinationsGrid