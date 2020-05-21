import React from 'react';
import CityInput from "./components/CityInput/CityInput";
import CityList from "./components/CityList/CityList";

function App() {

    return (
        <div className='container'>
            <div className="row">
                <CityInput/>
            </div>
            <CityList/>
        </div>
    );
}

export default App
