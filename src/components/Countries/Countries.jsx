import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  console.log(countries);

  return (
    <div>
      <h2>In The Countries: {countries.length}</h2>
      {countries.map((country) => (
        <Country country={country} key={country.ccn3.ccn3}>
          {" "}
        </Country>
      ))}
    </div>
  );
};

export default Countries;
