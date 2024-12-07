import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../../reducers/reducer";

const CharStates = createContext();
const lsFavs = JSON.parse(localStorage.getItem("favs") || "[]");
const savedTheme = localStorage.getItem("theme") || "light";

const initialState = {
  favs: lsFavs,
  chars: [],
  theme: savedTheme, // Tema inicial
};

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
  
      dispatch({ type: "GET_CHARS", payload: res.data });
  
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  return (
    <CharStates.Provider value={{ state, dispatch }}>
      {children}
    </CharStates.Provider>
  );
};
export default Context;

export const useCharStates = () => useContext(CharStates);