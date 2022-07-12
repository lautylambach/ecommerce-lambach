import logo from './logo.svg';
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { ItemListContainer} from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  let nombreUsuario= 'Coder'
  return (
    
    <div className="App">
      <NavBar></NavBar>
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
  </header>*/}
    <ItemListContainer greeting={nombreUsuario}/>
    
    </div>
  );
}

export default App;
