export const reducer = (state, action) => {
    switch (action.type) {
      case "GET_CHARS":
        return { ...state, chars: action.payload };
      case "ADD_FAV":
        return { ...state, favs: [...state.favs, action.payload] };
      case "DELETE_FAV":
        const filterFavs = state.favs.filter(
          (fav) => fav.id !== action.payload.id
        );
        return { ...state, favs: filterFavs };
      case "CLEAR_FAVS": // Nueva acción para borrar todos los favoritos
        return { ...state, favs: [] };
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      default:
        return state; 
    }
  };