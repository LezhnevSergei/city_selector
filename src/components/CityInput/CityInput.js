import React, {useRef, useState} from 'react';
import {connect} from "react-redux";
import SelectCity from "../SelectCity/SelectCity";
import {addCity} from "../../redux/actions/addCity";
import './CityInput.scss';

const CityInput = ({addCity, fetchedCities}) => {
    const inputRef = useRef(null)
    const [textInput, setTextInput] = useState('')

    const changeHandler = (e) => {
        setTextInput(e.target.value)
    }

    const addCityHandler = () => {
        if (fetchedCities.includes(inputRef.current.value)) {
            addCity(inputRef.current.value)
            setTextInput('')
        } else {
            inputRef.current.value = 'Город не найден!'
            setTimeout(() => {
                inputRef.current.value = ''
            }, 1000)
        }
    }

    return (
        <form className='col-4 offset-4 city-input' onSubmit={(e) => e.preventDefault()}>
            <input
                className='input-city'
                type='text'
                value={textInput}
                onChange={changeHandler}
                ref={inputRef}
            />
            <SelectCity input={inputRef} cityName={textInput}/>
            <button
                onClick={addCityHandler}
            >
                Добавить
            </button>
        </form>
    );
}

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities,
        fetchedCities: state.citiesReducer.fetchedCities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCity: (city) => dispatch(addCity(city))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityInput);
