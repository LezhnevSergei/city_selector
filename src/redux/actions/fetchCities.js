import axios from "axios";
import {FETCH_CITIES} from "../types";

export const fetchCities = () => dispatch => {

    axios.get('https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json')
        .then(res => dispatch(fetchCitiesSuccess(res.data.city.map(c => c.name))))
}

const fetchCitiesSuccess = cities => {
    return {
        type: FETCH_CITIES,
        cities
    }
}