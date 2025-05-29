import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox(){
    let [city, setCity] = useState("");
    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = (evt) => {
        evt.preventDefault();
        console.log("City name submitted: ", city);
        setCity("");
        
    }

    return (
        <div className='Search-box'>
            <h3>Search for the Weather</h3>
            <form action="" onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" 
                variant="outlined" required value={city}
                 onChange={handleChange}/>
                <br /><br />
            <Button variant="contained" type="submit" >
            Search
             </Button>
            </form>

        </div>
    );
}