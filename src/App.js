import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Documents from './pages/Documents';
import Projects from './pages/Projects';
import Montage from './pages/Montage';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useState } from 'react';
import ScrollToTop from './components/ScrollToTop';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [orderModalOpen, setOrderModalOpen] = useState(false)

  const closeBtn = () => {
    setOrderModalOpen(true)
    setMenuOpen(false)
  }
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">

        <Navbar orderModalOpen={orderModalOpen} menuOpen={menuOpen} setOrderModalOpen={setOrderModalOpen} setMenuOpen={setMenuOpen} closeBtn={closeBtn} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produkter' element={<Products setOrderModalOpen={setOrderModalOpen} />} />
          <Route path='/dokumentcenter' element={<Documents />} />
          <Route path='/projekt' element={<Projects />} />
          <Route path='/montage' element={<Montage />} />
          <Route path='/kontakta-oss' element={<Contact />} />
        </Routes>

        <Footer />

      </div>
      <ScrollToTop />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
