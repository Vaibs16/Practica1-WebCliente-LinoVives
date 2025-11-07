import { useState } from "react"
import './SearchBar.css'

export default function SearchBar( {onSearch} ) {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value)
    };

    const handleSummit = (event) => {
        event.preventDefault();
        onSearch(inputValue);
    };

    return (
        <form onSubmit={handleSummit} className="search-form">
            <input className = "search-input" type = "text" value={inputValue} onChange={handleChange} placeholder="Introduzca serie..." />
            <button type = "submit" className="search-button">Buscar</button>
        </form>
    );


}