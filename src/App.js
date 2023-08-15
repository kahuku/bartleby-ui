import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import SpellsList from './components/SpellsList/SpellsList';
import SpellDetails from './components/SpellDetails/SpellDetails';
import CharmsList from './components/CharmsList/CharmsList';
import CharmDetails from './components/CharmDetails/CharmDetails';
import './App.css'; // Import any styles if needed

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />

          <Route path="/spells" element={<SpellsList />} />
          <Route path="/spells/:spellId" element={<SpellDetails />} />

          <Route path="/charms" element={<CharmsList />} />
          <Route path="/charms/:charmId" element={<CharmDetails />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
