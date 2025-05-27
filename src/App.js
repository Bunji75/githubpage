import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Projects from './components/Projects';
import About from './components/About';
import Resume from './components/Resume';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/Resume" element={<Resume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
