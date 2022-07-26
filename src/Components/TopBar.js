import React from 'react'
import ModalContext from '../Contexts/ModalContext'
import { useContext } from 'react'

import './TopBar.css'

const TopBar = () => {
  const { toggleModal } = useContext(ModalContext)

  return (
    <div className='topbar-container'>
        <h1>Destinations</h1>
        <button className='add-btn' onClick={toggleModal}>
          <p className='plus-icon'>+</p>
          <p>AJOUTER</p>
        </button>
    </div>
  )
}

export default TopBar