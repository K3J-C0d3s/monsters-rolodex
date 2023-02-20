import { useState, useEffect } from 'react';
import "./App.css";
import CardList from './components/card-list/CardList.jsx'
import SearchBox from "./components/search-bar/SearchBox";

const App = () => {
  console.log('render')

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  }
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  
  useEffect(() => { 
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeHolder='search monsters'
          className='monsters-search-box' />
        <CardList monsters={filteredMonsters} />
      </div>
    );
}

export default App;
