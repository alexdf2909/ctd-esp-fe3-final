import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/Context";

const Card = ({ char }) => {
  const {
    dispatch,
    state: { favs,theme },
  } = useCharStates();

  const findFav = favs.find((fav) => fav.id === char.id);
  // console.log(findFav);
  const addFav = () => {
    if(!findFav)
      alert("Dentista añadido exitosamente");
    else
      alert("Dentista eliminado exitosamente");
    dispatch({ type: findFav ? "DELETE_FAV" : "ADD_FAV", payload: char });
  };

  return (
    <div className={`card ${theme}`}>
      <Link to={`/detail/${char.id}`}>
      <img src="/images/doctor.jpg" alt="" />
        <h3>{char.name}</h3>
        <h4>{char.username}</h4>
      </Link>
      <button onClick={addFav} className="favButton">{findFav ? "🌟" : "⭐"}</button>
    </div>
  );
};

export default Card;
