import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Careers from './Pages/Careers/Careers';
import Contact from './Pages/Contact/Contact';
//IMPORTING APPDEVELOPMENT 
import AppDevelopment from './Pages/Services/components/AppDevelopment';
import Marketing from './Pages/Services/components/marketing';
import DataSolution from './Pages/Services/components/Datamining';
import WebDevelopment from './Pages/Services/components/webdev'

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/appdevelopment" element={<AppDevelopment />} />
          <Route path="/webdevelopment" element={<WebDevelopment />} />
          <Route path="/datasolutions" element={<DataSolution />} />
          <Route path="/marketing" element={<Marketing />} />
          

        </Routes>

      </main>
      
      <Footer />
    </Router>
  );
}

export default App;
