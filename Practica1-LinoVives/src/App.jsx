import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import { searchSeries } from './components/TvMazeAPI';
import SeriesList from './components/SeriesList';

export default function App() {
  
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState([]);

  useEffect(() => {
    searchSeries(search).then((data) => {
      setSeries(data);
    })
  }, [search]);

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
      <SeriesList series={series} />
    </div>
  )
}

