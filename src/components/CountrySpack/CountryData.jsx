const CountryData = ({country}) => {
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
      <br /> <hr />
    </div>
  );
};

export default CountryData;
