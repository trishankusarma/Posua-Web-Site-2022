import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/shared/Footer';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home'
import GalleryPage from './pages/Gallery';
import Team from './pages/Team'
import Team1 from './pages/Team1'
import Sponsor from './pages/Sponsor';
import Artist from './pages/Artists';
import Events from "./pages/Events";
import './Global.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={< Home />} key='route-home-screen' />
                    <Route exact path="/gallery" element={< GalleryPage />} key='route-gallery-screen' />
                    <Route exact path="/team" element={< Team />} key='route-team-screen' />
                    <Route exact path="/team1" element={< Team1 />} key='route-team1-screen' />
                    <Route exact path="/sponsors" element={<Sponsor />} key='route-sponsors-screen' />
                    <Route exact path="/artists" element={<Artist />} key='route-artists-screen' />
                    <Route exact path="/events" element={<Events />} key='route-events-screen' />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
