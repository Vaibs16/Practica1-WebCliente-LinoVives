import "./SeriesList.css";
import FavoriteButton from "./FavoriteButton";


export default function SeriesList({ series, onSelect }) {
  if (!series || series.length === 0) {
    return <p>No hay resultados.</p>;
  }

    return (
    <div className="series-list">
      {series.map((item) => (
        <div key={item.show.id} className="series-item" onClick={() => onSelect(item.show.id)}>
          {item.show.image ? (
            <img src={item.show.image.medium} alt={item.show.name} />
          ) : (
            <div className="no-image">Sin imagen</div>
          )}
          <div className="series-info">
            <h3>{item.show.name}</h3>
            <FavoriteButton />
          </div>
        </div>
      ))}
    </div>
  );
}
