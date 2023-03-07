import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './pages/Main/Main';
import { NotFound } from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';

const App = () => {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </div>
  );
};

export default App;
