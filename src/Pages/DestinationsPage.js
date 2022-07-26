import React, { useContext } from 'react'
import DestinationsGrid from '../Components/DestinationsGrid'
import TopBar from '../Components/TopBar.js'

import ModalContext from '../Contexts/ModalContext' 

import './DestinationsPage.css'

const DestinationsPage = () => {
  const { showModal } = useContext(ModalContext)

  return (
    <div className={showModal ? 'main-container-modal' : 'main-container'}>
        <div className='main-content'>
            <TopBar />
            <DestinationsGrid />
        </div>
    </div>
  )
}

export default DestinationsPage