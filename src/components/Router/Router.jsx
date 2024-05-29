import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Announces from '../../pages/Announces/Announces'
import About from '../../pages/About/About'
import Error from '../../pages/Error/Error'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'


function RouterElem() {
    
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/annonces" element={<Announces  />}> 
                        <Route path=':announceId' element={<Announces />} />
                    </Route>
                    <Route path="/apropos" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default RouterElem