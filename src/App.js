import './App.css';
import Card from './components/Card/Card';
import Cards from './components/Cards/Cards';
import SearchBar from "./components/SearchBar/SearchBar"
import characters, { Rick } from './data.js';

function App() {
   return (
      <div className='App'>
         <SearchBar onSearch={(characterID) => window.alert(characterID)} />
         <Cards characters={characters} />
      </div>
   );
}

export default App;
