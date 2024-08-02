import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import SlackPage from './pages/SlackPage';
import WarrantsPage from './pages/WarrantsPage';
import EpikPage from './pages/EPIKpage';
import ReactGA from 'react-ga4';
import KitchenPage from "./pages/KitchenPage"
import CalcPage from './pages/CalcPage';

function RouterComponent() {
    ReactGA.initialize('G-T7NGPZ3VJD');
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/SlackBot" element={<SlackPage />} />
                <Route path="/Warrants" element={<WarrantsPage />} />
                <Route path="/AIConversationCatalyst" element={<EpikPage />} />
                <Route path="/KitchenGuru" element={<KitchenPage />} />
                <Route path="/FinancialCalculatorAPI" element={<CalcPage />} />
            </Routes>
        </Router>
    );
}

export default RouterComponent;