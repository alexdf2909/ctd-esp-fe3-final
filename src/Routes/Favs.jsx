import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/Context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {
    state: { favs,theme },
    dispatch,
  } = useCharStates();

  const handleClearFavs = () => {
    dispatch({ type: "CLEAR_FAVS" });
  };

  return (
    <main className={theme}>
      <h1>Dentists Favs</h1>
      <div className="borrar">
      <button onClick={handleClearFavs} className="clear-favs-btn">
        Borrar todos los favoritos
      </button>
      </div>
      
      <div className="card-grid">
        {favs.map((char) => (
          <Card key={char.id} char={char} />
        ))}
      </div>
    </main>
  );
};

export default Favs;
