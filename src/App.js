import './App.css';
import AboutMe from './Components/AboutMe';
import Header from './Components/Header';
import Projetos from './Components/Projetos';

function App() {
  return (
    <div className='main-app-container'>
      <Header />
      <AboutMe />
      <Projetos />
    </div>
  );
}

export default App;
