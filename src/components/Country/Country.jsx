import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({country, handaleVisitedCountry, handleAddVisitedFlags}) => {
    const {name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const clickVisited = () => {
        setVisited(!visited)
    }

    // const passWithParams = () => handaleVisitedCountry(country);
        return (
            <div className={`country ${visited && 'visited'}`}>
            <h2>Name: {name?.common} </h2>
            <img src= {flags?.png} alt="" />
            {/* <img src= {flags.svg} alt="" /> */}
            <h2>official Name: {name?.official} </h2>
            <h3>Population: {population} </h3>
            <h2>Area: {area} Mile</h2>
            <p>Country Code: {cca3}</p>
            <button onClick={ () => handleAddVisitedFlags(country.flags.png)}>Add Flags</button> <br /> <br />
            <button onClick={ () => handaleVisitedCountry(country)}>Mark Visited Country</button> <br /> <br />
            <button onClick={clickVisited} >{visited?'Visited':'Going'}</button>
            {visited ? '_I have visited This Country': '_I Want To Visite'}

            <hr /> <br />
            
            <CountryDetail
            country = {country}
            handaleVisitedCountry = {handaleVisitedCountry}
            handleAddVisitedFlags = {handleAddVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;