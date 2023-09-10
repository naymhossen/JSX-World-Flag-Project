import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountry] = useState([])
    const [addVisitedFlages, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])


    const handaleVisitedCountry = (country) => {
        console.log(country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountry(newVisitedCountries);
    };

    const handleAddVisitedFlags = (country) => {
        console.log('visiting flags');
        const newAddVisitedCountryFlags = [...addVisitedFlages,country];
        setVisitedFlags(newAddVisitedCountryFlags);


    }

    return (
        <>
            <div>
                <h2>Im Visite This Countries: {visitedCountries.length}</h2>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                <div className="add-flag-container">
                    {
                        addVisitedFlages.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
                </div>
            </div>
            <h3>Countries ❤️: {countries.length}</h3>
            <div className="country-container">
            {
                countries.map(country => 
                <Country key={country.cca3} 
                handaleVisitedCountry ={handaleVisitedCountry}
                handleAddVisitedFlags = {handleAddVisitedFlags}
                country={country}></Country>)
            }
            </div>
        </>
    );
};

export default Countries;