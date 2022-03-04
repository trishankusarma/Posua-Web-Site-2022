import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Home from './pages/Home'

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
