import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accueil from '../../pages/Accueil/Accueil'
import Annonces from '../../pages/Annonces/Annonces'
import Apropos from '../../pages/Apropos/Apropos'
import Erreur from '../../pages/Erreur/Erreur'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

function RouterElem() {
    return (
        <React.StrictMode>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Accueil />} />
                    <Route path="/annonces/:id" element={<Annonces />} />
                    <Route path="/apropos" element={<Apropos />} />
                    <Route path="*" element={<Erreur />} />
                </Routes>
                <Footer />
            </Router>
        </React.StrictMode>
    )
}

export default RouterElem