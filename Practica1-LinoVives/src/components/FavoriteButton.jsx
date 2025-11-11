import { useState } from "react"
import { FaHeart } from "react-icons/fa"
import "./FavoriteButton.css";

export default function FavoriteButton() {
    const[isFavorite, setIsFavorite] = useState(false);

    return(
        <button className="favorite-btn" 
        onClick={(e) => {
            e.stopPropagation();           // StopPropagation sirve para que no se abra el modal cuando el usuario le da al boton de favoritos
            setIsFavorite(!isFavorite);
        }}>
            <FaHeart size={28} color={isFavorite ? "red" : "gray"} />
        </button>
    );
}