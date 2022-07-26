import {
    useState,
    useEffect,
    createContext
} from 'react'

const LocalStorageContext = createContext()

export const LocalStorageProvider = ({ children }) => {
    const [contextData, setContextData] = useState([])

    function getStorageValue(key, defaultValue) {
        const saved = localStorage.getItem(key)
        const initial = JSON.parse(saved)
        return initial || defaultValue
    }
    
    const useLocalStorage = (key, defaultValue) => {
        const [value, setValue] = useState(() => {
            return getStorageValue(key, defaultValue)
        })
        
        useEffect(() => {

            localStorage.setItem(key, JSON.stringify(value))
        }, [key, value])
        
        return [value, setValue]
    }

    return (
        <LocalStorageContext.Provider value={{ contextData, setContextData, useLocalStorage }}>
            {children}
        </LocalStorageContext.Provider>
    )
}

export default LocalStorageContext