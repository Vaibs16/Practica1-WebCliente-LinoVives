import "./SeriesList.css";
export default function SeriesList({ series }) {
  if (!series || series.length === 0) {
    return <p>No hay resultados.</p>;
  }

    return (
    <div className="series-list">
      {series.map((item) => (
        <div key={item.show.id} className="series-item">
          {item.show.image ? (
            <img src={item.show.image.medium} alt={item.show.name} />
          ) : (
            <div className="no-image">Sin imagen</div>
          )}
          <h3>{item.show.name}</h3>
        </div>
      ))}
    </div>
  );
}
