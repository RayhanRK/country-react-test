import React, { use, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  // console.log(countries);

  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country)=>{
    // console.log('handle visited country clicked', country);
    const newVisitedCountry = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountry);

  }
   const [visitedFlags, setVisitedFlags] = useState([]);

   const handleVisitedflags =(flag) =>{
        // console.log("flags need to add", flag);
        const newVisitedflags =[...visitedFlags, flag];
        setVisitedFlags(newVisitedflags);

   }

  return (
    <div>      
      <h2>In The Countries: {countries.length}</h2>
      <h3>Total Visited Country: {visitedCountries.length}</h3>
      <h3>Total Visited flags: {visitedFlags.length}</h3>

      <ol>{
         visitedCountries.map( country => <li key={country.ccn3.ccn3} >{country.name.common}</li> )  }
      </ol>
          <div className="flags-container">
           { visitedFlag.map((flag,index) => <img key={index} src={flag} /> )}
          </div>

      <div className="countries">
        {
        countries.map(country => <Country country={country} key={country.ccn3.ccn3}
        handleVisitedCountries ={handleVisitedCountries}  handleVisitedflags = {handleVisitedflags}>
        </Country>)
      }
      </div>

    </div>
  );
};

export default Countries;
