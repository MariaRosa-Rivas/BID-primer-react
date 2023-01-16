
import './App.css';
import Titulo from './componente/Titulo';
import Subtitulo from './componente/Subtitulo';
import Lista from './componente/Lista';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Subtitulo/>
        <Lista />
      </header>
      
    </div>
  );
}

export default App;
