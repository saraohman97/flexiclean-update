import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/produkter' element={ <Products /> } />
        <Route path='/dokumentcenter' element={ <Documents /> } />
        <Route path='/kontakta-oss' element={ <Contact /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
