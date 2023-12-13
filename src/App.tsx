import './App.css';
import Nav from './components/Nav/Nav';
import Title from './components/Title';
import { About } from './pages/About';
import Hero from './pages/Hero';
import { Porject } from './pages/Project';
import ProjectDetail from './components/ProjectDetail';
import Skills from './pages/Skills';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Porject />
    </div>
  );
}

export default App;
