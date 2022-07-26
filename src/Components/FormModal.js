import React, { useState, useContext } from 'react'
import ModalContext from '../Contexts/ModalContext'
import LocalStorageContext from '../Contexts/LocalStorageContext'

import './FormModal.css'
import ToggleBtn from '../UI/ToggleBtn'

const FormModal = () => {

    const { showModal, toggleModal } = useContext(ModalContext)
    const { setContextData, useLocalStorage } = useContext(LocalStorageContext)
    const [storageData, setStorageData] = useLocalStorage('Destination', '')

    const [destination, setDestination] = useState('')
    const [address, setAddress] = useState('')
    const [imageLink, setImageLink] = useState('')
    const [population, setPopulation] = useState('')
    const [hotels, setHotels] = useState('')
    const [income, setIncome] = useState('')
    const [size, setSize] = useState('')
    const [active, setActive] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const destinationObj = {
            destination: destination,
            address: address,
            imageLink: imageLink,
            population: population,
            hotels: hotels,
            income: income,
            size: size,
            active: active,
        }

        setContextData([...storageData, destinationObj])
        setStorageData([...storageData, destinationObj])
        toggleModal()
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            toggleModal()
        }
    })

    return (
        <>
            {
                showModal &&
                <div className='modal-overlay'>
                    <div className='form-container'>
                        <form onSubmit={handleSubmit}>
                            <h3>Ajouter une nouvelle destination</h3>
                            <div className='form-column'>
                                <input
                                    value={destination}
                                    onChange={e => setDestination(e.target.value)}
                                    placeholder='Nom de la destination'
                                    type='text'
                                    name='destination'
                                    required
                                />
                                <input
                                    autoFocus
                                    value={address}
                                    onChange={e => setAddress(e.target.value)}
                                    placeholder='Adresse'
                                    type='text'
                                    name='address'
                                    required
                                />
                                <input
                                    value={imageLink}
                                    onChange={e => setImageLink(e.target.value)}
                                    placeholder="Lien de l'image"
                                    type='text'
                                    name='imageLink'
                                    required
                                />
                            </div>
                            <div className='form-row'>
                                <input
                                    value={population}
                                    onChange={e => setPopulation(e.target.value)}
                                    placeholder='Nb Habitants'
                                    type='text'
                                    name='population'
                                    required
                                />
                                <input
                                    value={hotels}
                                    onChange={e => setHotels(e.target.value)}
                                    placeholder='Nb Hôtels'
                                    type='text'
                                    name='hotels'
                                    required
                                />
                                <input
                                    value={income}
                                    onChange={e => setIncome(e.target.value)}
                                    placeholder='Revenu moy'
                                    type='text'
                                    name='income'
                                    required
                                />
                                <input
                                    value={size}
                                    onChange={e => setSize(e.target.value)}
                                    placeholder='Superficie'
                                    type='text'
                                    name='size'
                                    required
                                />
                            </div>
                            <div className='toggle-container'>
                                <div>
                                    <ToggleBtn
                                        active={active}
                                        setActive={setActive}
                                    />
                                </div>
                                <p>Activer</p>
                            </div>
                            <div className='form-buttons'>
                                <button className='cancel-btn' onClick={() => toggleModal()}>Cancel</button>
                                <button className='confirm-btn' type='submit'>Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default FormModal