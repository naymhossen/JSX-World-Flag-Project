import CountryData from "../CountrySpack/CountryData";

const CountryDetail = ({country, handaleVisitedCountry, handleAddVisitedFlags}) => {
    return (
        <div>
            <h4>Country Detail</h4>
            <CountryData
            country = {country}
            handaleVisitedCountry = {handaleVisitedCountry}
            handleAddVisitedFlags = {handleAddVisitedFlags}
            ></CountryData>
        </div>
    );
};

export default CountryDetail;