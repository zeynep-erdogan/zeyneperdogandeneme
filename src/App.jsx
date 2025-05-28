import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Top from './components/Top';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [dil, setDil] = useState('tr');

  const changeDil = () => {
    setDil(dil === 'tr' ? 'en' : 'tr');
  };

  return (
    <ThemeProvider>
      <Top changeDil={changeDil} dil={dil} />
      <Header dil={dil} />
      <Skills dil={dil} />
      <Profile dil={dil} />
      <Projects dil={dil} />
    </ThemeProvider>
  );
}

export default App;
