import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home'
import Team from './pages/Team'
import Team1 from './pages/Team1'
import Sponsor from './pages/Sponsor';
import Artist from './pages/Artists';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/team" element={< Team />} />
          <Route exact path="/team1" element={< Team1 />} />
          <Route exact path="/sponsors" element={<Sponsor />} />
          <Route exact path="/artists" element={<Artist />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
