import { ADD_FAV, REMOVE_FAV, ORDER,FILTER} from "../actions/types";

const initialState = {
    myFavorites : [],
    allCharacters: [],
};

const reducer = (state=initialState, {type,payload}) => {
    switch(type){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:      
      return { ...state, myFavorites: payload };
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