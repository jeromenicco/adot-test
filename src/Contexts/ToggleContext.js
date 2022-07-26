import { createContext, useState } from 'react'

const ToggleContext = createContext();

export const ToggleProvider = ({children}) => {
    const [active, setActive] = useState(false)
    
    return (
        <ToggleContext.Provider value={{active, setActive}}>
            {children}
        </ToggleContext.Provider>
    )
}

export default ToggleContext