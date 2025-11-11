import "./Modal.css";

export default function Modal({ show, onClose, children }) {
  if (!show) return null;

  return ( //El StopPropagation sirve para que el modal se cierre únicamente cuando se le da al botón de cerrar (X). Sin él, se cierra al darle a cualquier parte de la pantalla.
    <div className="modal-overlay" onClick={(e) => e.stopPropagation()}> 
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
