import React from 'react'
import ContinentData from './ContinentData'
import { useState, useEffect } from 'react';

const Continents = ({setShowButton}) => {
    const [africaData, setAfricaData] = useState(null)
    const [asiaData, setAsiaData] = useState(null)
    const [europeData, setEuropeData] = useState(null)
    const [country, setCountry] = useState({
       africa: [],
       asia: [], 
       europe: [],
    });

    useEffect(() => {
        let fetchAfrica = async () => {
            let resAfrica = await fetch('https://restcountries.com/v3.1/region/africa')
            let jsonAfrica = await resAfrica.json()
            setCountry((prevCountry) => ({...prevCountry, africa: jsonAfrica}))
        }
    
        let fetchAsia = async () => {
            let resAsia = await fetch('https://restcountries.com/v3.1/region/asia')
            let jsonAsia = await resAsia.json()
            setCountry((prevCountry) => ({...prevCountry, asia: jsonAsia}))
        }
    
        let fetchEurope = async () => {
            let resEurope = await fetch('https://restcountries.com/v3.1/region/europe')
            let jsonEurope = await resEurope.json()
            setCountry((prevCountry) => ({...prevCountry, europe: jsonEurope}))
        }


    fetchAfrica();
    fetchAsia();
    fetchEurope();
    },[])

  return (
    <div>
        <div>
        <h3>Africa</h3>
        <div className='selector-container'>
            <select id="chooseAfrica" className='selector'>
            { country.africa.map((countries) => {
                return(
            <option key={countries.name.common} value={countries.name.common} >
            {countries.name.common}
            </option>
            )
            })}
            </select>
            <button
            className='button'
            onClick={async () => {
            
            let url = document.querySelector("#chooseAfrica").value;
            let africaRes = await fetch('https://restcountries.com/v3.1/name/' + url);
            let africaJson = await africaRes.json();
            setAfricaData(africaJson[0]);
        }}
        >Get countries data</button>
        </div>
        {africaData && <ContinentData data={africaData}  /> }
<br />
        <h3>Asia</h3>
        <div className='selector-container'>
        <select id="chooseAsia" className='selector'>
            {country.asia.map((countries) => {
            return(
            <option key={countries.name.common} value={countries.name.common}>
            {countries.name.common}
            </option>
            )
            })}
            </select>
            <button 
            className='button'
            onClick={async () => {
                let url = document.querySelector("#chooseAsia").value
                let asiaRes = await fetch('https://restcountries.com/v3.1/name/' + url);
                let asiaJson = await asiaRes.json();
                setAsiaData(asiaJson[0]);
            }
        }
        >Get countries data</button>
        </div>
    {asiaData && <ContinentData data={asiaData} /> }
<br />
        <h3>Europe</h3>
        <div className='selector-container'>
            <select id="chooseEurope" className='selector'>
            {country.europe.map((countries) => {
            return(
            <option key={countries.name.common} value={countries.name.common}>
            {countries.name.common}
            </option>
            )
            })}
            </select>
            <button 
            className='button'
            onClick={async () => {
                let url = document.querySelector("#chooseEurope").value
                let europeRes = await fetch('https://restcountries.com/v3.1/name/' + url);
                let europeJson = await europeRes.json();
                setEuropeData(europeJson[0]);
            }
        }
        >Get countries data</button>
        </div>
    {europeData && <ContinentData data={europeData} /> }
        </div>
        <br />
        <button onClick={() => {setShowButton(false)}} className='button'>hide</button>
    </div>
  )
}
export default Continents;
