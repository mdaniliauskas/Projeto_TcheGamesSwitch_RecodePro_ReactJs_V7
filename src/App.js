import './App.css';
import Menu from './Components/Menu';
import Rotas from './rotas';
import { BrowserRouter } from 'react-router-dom';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Menu />
      </header>
      <main>
        <Container>
          <Rotas />
        </Container>
      </main>
      <footer>
        
      </footer>
      
    </div>
    </BrowserRouter>    
  );
}

export default App;
