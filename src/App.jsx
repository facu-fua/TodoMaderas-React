import logo from './logo.svg';
import './App.css';
import NavTodoMaderas from './components/navbar/index.jsx';
import ItemListContainer from './containers/itemListContainer.jsx'


function App() {
  return (
    <div className="App">
      <NavTodoMaderas/>
      <ItemListContainer greeting="Bienvenidos a TodoMaderas"/>
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
