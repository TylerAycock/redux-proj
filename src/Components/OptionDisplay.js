import React from "react";
import { useSelector } from "react-redux";
import { selectPotentials } from "../redux/slices/potentialCountriesSlice";

const OptionDisplay = () => {
    const currentPotentials = useSelector(selectPotentials)
    console.log(currentPotentials)
    return <div className="stack">{currentPotentials.map((country, index) =>{
        return(
            <h2 key={country.name.official}>{country.name.common}</h2>
        )
    })}</div>;
};

export default OptionDisplay;
