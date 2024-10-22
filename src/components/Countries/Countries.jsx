import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'


const countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisitedCountries = country => {
        console.log('add this to your visited country')
        const newVisitedCountry = [...visitedCountries , country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlags =  flag => {
        const newVisitedFlags = [...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div >
            <h3>Countries : {countries.length}</h3>
            {/* visited country  */}
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                 {
                    visitedCountries.map(country => <li>key ={country.cca3} {country.name.common}</li>)
                 }

                </ul>
            </div>
            <div className="flag-container">
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
                
            </div>
            {/* display country  */}
           <div className="country-container">
           {
                countries.map(country => <Country
                     key={country.cca3} 
                     handleVisitedCountries = {handleVisitedCountries}
                     handleVisitedFlags = {handleVisitedFlags}
                     country={country}></Country>)
            }
           </div>
        </div>
    );
};

export default countries;
