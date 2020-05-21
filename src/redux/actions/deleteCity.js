import {DELETE_CITY} from "../types";

export const deleteCity = city => dispatch => {
    const cities = sessionStorage.getItem('cities')
    const clearCities = cities.split(',').filter(c => c !== city)
    sessionStorage.setItem('cities', clearCities)

    dispatch(deleteCitySuccess(city))
}

export const deleteCitySuccess = city => {
    return {
        type: DELETE_CITY,
        city
    }
}