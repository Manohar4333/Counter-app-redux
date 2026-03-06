import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//importing the store 
 import store from './store/store.js'
import {Provider} from 'react-redux'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*making the store available to the entire app by wrapping the App component with the Provider component and passing the store as a prop */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
