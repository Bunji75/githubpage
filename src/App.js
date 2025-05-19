import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
