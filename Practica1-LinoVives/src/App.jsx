import { useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'

export default function App() {
  
  const [search, setSearch] = useState('');

  const handleSearch = (query) => {
    setSearch(query);
    console.log("Buscando:", query);
  }
  return (
    <div className='app-container'>
      <h1>Buscador de series</h1>

      <div className="search-container">
        <SearchBar onSearch = {handleSearch}></SearchBar>
      </div>
    </div>
  )
}

