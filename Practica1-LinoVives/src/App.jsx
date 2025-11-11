import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import './App.css'
import { searchSeries, seriesDetails } from './components/TvMazeAPI';
import SeriesList from './components/SeriesList';
import Modal from './components/Modal';

export default function App() {
  
  const [search, setSearch] = useState('');
  const [series, setSeries] = useState([]);
  const [selectedSeries, setSelectedSeries] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    searchSeries(search).then((data) => {
      setSeries(data);
    })
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
    console.log("Buscando:", query);
  };

  const handleSelect = (id) => {
    console.log("Click en:", id);
    seriesDetails(id).then((data) => {
      console.log("Datos recibidos de API:", data);
      setSelectedSeries(data);
      setIsOpen(true);
    });
  };

  const cleanSummary = (summary) => {
    if (!summary) {
      return "Sin resumen disponible";
    }
    return summary.replace(/<[^>]+>/g, "");
  };



  return (
    <div className='app-container'>
      <h1>Buscador de series</h1>

      <div className="search-container">
      <SearchBar onSearch = {handleSearch}></SearchBar>
      </div>
      <SeriesList series={series} onSelect={handleSelect}/>
      <Modal show={isOpen} onClose={() => setIsOpen(false)}>
        {selectedSeries && (
          <div>
            <h2>{selectedSeries.name}</h2>
            {selectedSeries.image && (
              <img
                src={selectedSeries.image.original}
                alt={selectedSeries.name}
              />
            )}
            <p>{cleanSummary(selectedSeries.summary)}</p>
            <p>
              <strong>Géneros:</strong>{" "}
              {selectedSeries.genres.join(", ") || "Sin datos"}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              {selectedSeries.rating && selectedSeries.rating.average
                ? selectedSeries.rating.average
                : "N/A"}
            </p>
          </div>
        )}
      </Modal>
    </div>
  )
}

