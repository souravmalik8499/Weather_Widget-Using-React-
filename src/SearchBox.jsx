import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function SearchBox(){
    return (
        <div className='search-box'>
            <h3>Search for the Weather</h3>
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" required />
                <br /><br />
            <Button variant="contained" type="submit" >
            Search
             </Button>
            </form>

        </div>
    );
}