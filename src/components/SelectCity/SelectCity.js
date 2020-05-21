import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {fetchCities} from "../../redux/actions/fetchCities";
import './SelectCity.scss'

const SelectCity = ({input, cityName, fetchedCities, fetchCities}) => {
    const [suitableCities, setSuitableCities] = useState([])

    useEffect(() => {
        fetchCities()
        getSuitableCities(cityName)
    }, [cityName])

    const getSuitableCities = cityName => {
        setSuitableCities(fetchedCities.filter(fc => fc.toUpperCase().startsWith(cityName.toUpperCase())))
    }

    const selectCityHandler = (city) => {
        input.current.value = city
        setSuitableCities([])

        input.current.focus()
    }

    return (
        cityName.length >= 3 && suitableCities.length
        ?   <div className='col-8 select'>
            {
                suitableCities.map(city => (
                    <button
                        id={city}
                        className='select__item'
                        key={city+Math.random()}
                        onClick={() => selectCityHandler(city)}
                    >
                        {city}
                    </button>)
                )
            }
            </div>
        :   null
    );
};

const mapStateToProps = state => {
    return {
        fetchedCities: state.citiesReducer.fetchedCities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchCities: () => dispatch(fetchCities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);