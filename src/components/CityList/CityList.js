import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getCities} from "../../redux/actions/getCities";
import City from "../City/City";
import './CityList.scss'

const CityList = ({cities, getCities}) => {
    useEffect(() => {
        getCities()
    }, [])

    return (
        sessionStorage.getItem('cities')
        ?   <ul className="col-4 offset-4 city-list">
                {cities.map(city => <City key={city+Math.random()} city={city} />)}
            </ul>
        :   <h3 className='empty-message'>Городов ещё нет :(</h3>
    );
};

const mapStateToProps = state => {
    return {
        cities: state.citiesReducer.cities
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCities: () => dispatch(getCities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);