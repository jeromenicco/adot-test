
import DestinationsPage from './Pages/DestinationsPage'
import FormModal from './Components/FormModal'

import { ModalProvider } from './Contexts/ModalContext'
import { LocalStorageProvider } from './Contexts/LocalStorageContext'
import { ToggleProvider } from './Contexts/ToggleContext'

import './App.css'
import './Responsive.css'

function App() {
  return (
    <div className='app'>
      <LocalStorageProvider>
        <ToggleProvider>
          <ModalProvider>
            <DestinationsPage />
            <FormModal />
          </ModalProvider>
        </ToggleProvider>
      </LocalStorageProvider>
    </div>
  )
}

export default App
