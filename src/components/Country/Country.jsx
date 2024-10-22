import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries,handleVisitedFlags}) => {
    const{name, flags,population,area, cca3} = country;

    const [visited, setVisited] = useState(false)
    const handleVisited = () => {
        setVisited(!visited)
    }
    // console.log(handleVisitedCountries)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{color:visited && 'black'}}>{name.common}</h3>
            <img style={{borderRadius:'9px'}} src={flags.png} alt="" />
            <p style={{fontSize:visited && '24px', color:visited&& 'blue'}}>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>

            <button onClick={() =>{handleVisitedCountries(country)}}>Mark visited</button>
            <button onClick={() => {handleVisitedFlags(country.flags.png)}}>Add flags</button>
            <button onClick={handleVisited}>{visited ?'Visited': 'Going'}</button>
        </div>
    );
};

export default Country;