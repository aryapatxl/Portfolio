import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SlackPage from './pages/SlackPage';
import WarrantsPage from './pages/WarrantsPage';
import EpikPage from './pages/EPIKpage';
import SpotifyPage from './pages/SpotPage';
import CalcPage from './pages/CalcPage';

function RouterComponent() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/SlackBot" element={<SlackPage />} />
                <Route path="/Warrants" element={<WarrantsPage />} />
                <Route path="/AIConversationCatalyst" element={<EpikPage />} />
                <Route path="/AlbumSearcher" element={<SpotifyPage />} />
                <Route path="/FinancialCalculatorAPI" element={<CalcPage />} />
            </Routes>
        </Router>
    );
}

export default RouterComponent;