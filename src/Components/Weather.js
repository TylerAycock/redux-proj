import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const display = useSelector(selectDisplay)
    const lat = display.capitalInfo.latlng[0]
    const lng = display.capitalInfo.latlng[1]

    const [weather, setWeather] = useState();

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/current.json',
            params: { q: `${lat}, ${lng}` },
            headers: {
                'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        }
        axios.request(options)
            .then(res => {
                console.log(res.data)
                setWeather(res.data)
            })
            .catch(err => console.log(err))
    }, [lat, lng])

    return (
        <div>
            <tbody>
                <table className="overview-table">
                    <tr>
                        <td>Conditions: </td>
                        <td>{weather?.current?.condition?.text}</td>
                    </tr>
                    <tr>
                        <td>Temperature: </td>
                        <td>{weather?.current?.temp_f}</td>
                    </tr>
                    <tr>
                        <td>Feels Like: </td>
                        <td>{weather?.current?.feelslike_f}</td>
                    </tr>
                    <tr>
                        <td>Humidity: </td>
                        <td>{weather?.current?.humidity}</td>
                    </tr>
                    <tr>
                        <td>Wind Speed: </td>
                        <td>{weather?.current?.wind_mph}
                        mph{' '} 
                        {weather?.current?.wind_dir}</td>
                    </tr>
                </table>
            </tbody>
        </div>
    );
};

export default Weather;
