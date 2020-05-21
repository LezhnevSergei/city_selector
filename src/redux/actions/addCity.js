import {ADD_CITY} from "../types";

export const addCity = city => dispatch => {
    const cities = sessionStorage.getItem('cities')

    if (cities) {
        sessionStorage.clear()
        const res = cities+','+city
        sessionStorage.setItem('cities', res)
    } else {
        sessionStorage.setItem('cities', city)
    }

    dispatch(addCitySuccess(city))
}

export const addCitySuccess = city => {
    return {
        type: ADD_CITY,
        city
    }
}