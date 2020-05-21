import {GET_CITIES} from "../types";

export const getCities = () => dispatch => {
    const cities = sessionStorage.getItem('cities') ? sessionStorage.getItem('cities').split(',') : []
    dispatch(getCitySuccess(cities))
}

export const getCitySuccess = cities => {
    return {
        type: GET_CITIES,
        cities
    }
}