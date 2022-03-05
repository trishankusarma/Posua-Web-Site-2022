import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home'
import Team from './pages/Team'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/team" element={< Team />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
