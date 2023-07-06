import { ADD_FAV, REMOVE_FAV, ORDER,FILTER} from "../actions/types";

const initialState = {
    myFavorites : [],
    allCharacters: [],
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites : [...state.allCharacters , payload],
                allCharacters: [...state.allCharacters , payload]
            };
        case REMOVE_FAV:
            let filteredFavs = state.myFavorites.filter((favs) => favs.id !== Number(payload));
            return {
                ...state,
                myFavorites : filteredFavs,
            };
        case FILTER:
            if(payload === 'Everyone'){
                return {
                    ...state,
                    myFavorites : state.allCharacters,
                }
            }
            let filtered = state.allCharacters.filter((char) => char.gender === payload);
            return{
                ...state,
                myFavorites: filtered,
            }
        case ORDER:
            let ordenada = [...state.allCharacters]
            return{
                ...state,
                myFavorites: payload === 'A'
                ? ordenada.sort((a,b) => a.id - b.id)
                : ordenada.sort((a,b)=> b.id - a.id)
            }

        default:
            return {...state};
    }
}

export default reducer;