import React from "react";
import { useState } from 'react';

const ContinentData = (props) => {

const [hideData, setHideData] = useState(true)
const continent = props.data;

return(
    <div>
{hideData && (
    <div style={{'width' : '100%', 'display' : 'flex', 'marginTop' : '20px'}}>
        <div style={{'width' : '250px', 'height' : '150px'}}>
            <img src={continent.flags.png} alt="" width="100%" height='100%'/>        
        </div>
        {props &&  
            <div style={{
                'width' : '50%',
                'display' : 'flex',
                'justifyContent' : 'center',
                'flexDirection' : 'column',
                'width' : '50%', 
                'fontSize' : '14px', 
                'backgroundColor' : 'whitesmoke'
                }}>
                <p>Name: {continent.name.common}</p>
                <p>Capital: {continent.capital?.[0]}</p>
                <p>Population: {continent.population}</p>
            </div>
            }
        </div>
)}
<br />
<button onClick={() => setHideData(!hideData)} className='button' >Press to hide and show</button>
    </div>
    )
}
export default ContinentData;

