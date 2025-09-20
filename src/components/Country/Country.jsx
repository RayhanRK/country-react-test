import React, { use, useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountries,handleVisitedflags }) => {
     const [visited, setVisited] = useState(false);

 const handleVisited =() =>{
    //  setVisited(visited ? false : true);

    setVisited(!visited);// shortest method 
    handleVisitedCountries(country);

   }

    return (
        <div className= { `country ${visited && 'country-visited'}` }>

            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h2>Name: {country.name.common}</h2>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area >300000 ?"(Big Country)": "(Small Country)"}</p>
            
            <button onClick={handleVisited} className='but'>
                {visited ? 'Visited' : 'Not Visited'}</button>

                <button onClick={() => {handleVisitedflags(country.flags.flags.png)}}
                className='but'>Add Visited Flags</button>

        </div>
    );
};

export default Country;




