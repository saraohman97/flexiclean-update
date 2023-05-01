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
import PutOrder from './components/PutOrder';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/produkter' element={ <Products /> } />
        <Route path='/dokumentcenter' element={ <Documents /> } />
        <Route path='/projekt' element={ <Projects /> } />
        <Route path='/montage' element={ <Montage /> } />
        <Route path='/kontakta-oss' element={ <Contact /> } />
        <Route path='/put-order' element={ <PutOrder /> } />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
