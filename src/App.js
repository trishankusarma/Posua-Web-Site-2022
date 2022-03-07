import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home'
import Sponsor from './pages/Sponsor';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/sponsors" element={<Sponsor />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
