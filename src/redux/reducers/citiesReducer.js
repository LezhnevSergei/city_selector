import {ADD_CITY, DELETE_CITY, FETCH_CITIES, GET_CITIES} from "../types";

const initialState = {
    fetchedCities: [],
    cities: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                fetchedCities: [...action.cities]
            }
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.city]
            }
        case GET_CITIES:
            return {
                ...state,
                cities: [...action.cities]
            }
        case DELETE_CITY:
            return {
                ...state,
                cities: [...state.cities].filter(city => city !== action.city)
            }
        default:
            return state
    }
}

export default citiesReducer