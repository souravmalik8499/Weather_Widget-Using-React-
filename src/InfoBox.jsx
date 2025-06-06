import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox(){
        const INIT_URL="https://tse2.mm.bing.net/th?id=OIP.I16WoD1jsDX42vY7dEi7tQHaE7&pid=Api&P=0&h=180"
    let info ={
        city: "Delhi",
        Weather:"overcast clouds",
        feelsLike: 36.05,
        humidity: 26,
        temp: 36.57,
        tempMax: 36.57,
        tempMin: 36.05,
    };
    return (
        <div className="InfoBox">
            <h1>WeatherInfo - {info.Weather}</h1>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="INIT_URL"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temperature = {info.tempMin}&deg;C</p>
             <p>Max Temperature = {info.tempMax}&deg;C</p>
             <p>The weather can be described as <i>{info.Weather}</i> and fills like {info.feelsLike}&deg;C</p>
                    
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}