import ReactDOM from 'react-dom/client'
import RouterElem from './components/Router/Router'
import AnnounceContextProvider from './Context/Context'

ReactDOM.createRoot(document.getElementById('root')).render( 
  <AnnounceContextProvider>
    <RouterElem />
  </AnnounceContextProvider>
)
