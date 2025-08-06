import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Iniciosesion from './components/Iniciosesion';
import Actas from './components/Actas';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Iniciosesion />} />
        <Route path="/actas" element={<Actas />} />
      </Routes>
    </Router>
  );
}

export default App;
