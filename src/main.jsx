//import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterElem from './components/Router/Router'
import AnnounceContextProvider from './Context/Context'
//import './style/main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AnnounceContextProvider>
    <RouterElem />
  </AnnounceContextProvider>
  
)
