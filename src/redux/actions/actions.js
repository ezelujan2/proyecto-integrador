import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "./types";

export const addFav = (payload) => {
    return {type: ADD_FAV, payload:payload};
};
export const removeFav = (payload) => {
    return {type: REMOVE_FAV, payload:payload};
};
export const filterCards = (gender) => {
    return {type: FILTER, payload:gender};
}
export const orderCards = (orden) => {
    return {type: ORDER, payload:orden};
}