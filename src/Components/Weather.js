import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { useDispatch } from "react-redux";
import { stopLoading, setLoading } from "../redux/slices/loadingSlice";

const Weather = () => {
    const dispatch = useDispatch()

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

        dispatch(setLoading())
        setTimeout(() => {
            axios.request(options)
                .then(res => {
                    console.log(res.data)
                    setWeather(res.data)
                    console.log('stopping the loading screen')
                    dispatch(stopLoading())
                })
                .catch(err => console.log(err))
        }, 1000)
    }, [lat, lng, dispatch])

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
