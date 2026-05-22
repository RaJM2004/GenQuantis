import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import { Home } from './pages/Home';
import { Quantum } from './pages/Quantum';
import { Intelligence } from './pages/Intelligence';
import { Enterprise } from './pages/Enterprise';
import { LifeScience } from './pages/LifeScience';
import { Solutions } from './pages/Solutions';
import { Vision } from './pages/Vision';
import { Security } from './pages/Security';
import { Contact } from './pages/Contact';
import { Product } from './pages/Product';
import { Innovations } from './pages/Innovations';
import { Investors } from './pages/Investors';
import { Robo } from './pages/Robo';
import { Careers } from './pages/Careers';
import { Insights } from './pages/Insights';
import { Blog } from './pages/Blog';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quantum" element={<Quantum />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/lifescience" element={<LifeScience />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/about" element={<Vision />} />
        <Route path="/security" element={<Security />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/innovations" element={<Innovations />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/robo" element={<Robo />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
