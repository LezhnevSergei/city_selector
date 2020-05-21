import React from 'react';
import {connect} from "react-redux";
import {deleteCity} from "../../redux/actions/deleteCity";
import './City.scss'

const City = ({city, deleteCity}) => {
    const deleteHandler = () => {
        deleteCity(city)
    }

    return (
        <li className="city-list__item">
            <p className="city-list__name">{city}</p>
            <button className='delete-btn' onClick={deleteHandler}>&times;</button>
        </li>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        deleteCity: (city) => dispatch(deleteCity(city))
    }
}

export default connect(null, mapDispatchToProps)(City);