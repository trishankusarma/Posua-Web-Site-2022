import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
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
import loader from './assets/loader1.webm'

function App() {

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => setIsLoading(false), 3000)

    }, [])

    return (
        <>
            {
                isLoading ?
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

                            <video width={"100%"} height={"100%"} preload='none' loop src={loader} autoPlay={true} type="video/webm" muted playsInline />
                        </div>
                    </> :
                    <>
                        <BrowserRouter>
                            <Navbar />
                            <Routes>
                                <Route exact path="/" element={< Home />} key='route-home-screen' />
                                <Route exact path="/gallery" element={< GalleryPage />} key='route-gallery-screen' />
                                <Route exact path="/team" element={< Team />} key='route-team-screen' />
                                <Route exact path="/team1/:id" element={< Team1 />} key='route-team1-screen' />
                                <Route exact path="/sponsors" element={<Sponsor />} key='route-sponsors-screen' />
                                <Route exact path="/artists" element={<Artist />} key='route-artists-screen' />
                                <Route exact path="/events" element={<Events />} key='route-events-screen' />
                            </Routes>
                        </BrowserRouter>
                        <Footer />
                    </>
            }
        </>
    );
}

export default App;
