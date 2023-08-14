import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import SpellsList from './components/SpellsList/SpellsList'; // Import the SpellsList component
import './App.css'; // Import any styles if needed

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Content />} />
          <Route path="/spells" element={<SpellsList />} /> {/* Use element prop */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
