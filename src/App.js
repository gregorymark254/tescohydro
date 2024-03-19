import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
