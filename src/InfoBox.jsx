import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';



export default function InfoBox({info}){
        
  
  const INIT_URL="https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&P=0&h=180"
  
  const Hot_URL="https://tse2.mm.bing.net/th?id=OIP.kazE3eWU1CehiR-xJi1g1gHaE8&pid=Api&P=0&h=180";
  const Cold_URL="https://tse3.mm.bing.net/th?id=OIP.dCCSUCTcaVSK9sWRhSe4OwHaE8&pid=Api&P=0&h=180";
  const Rainy_URL="https://www.hdwallpapers.in/download/falling_rain_drops_on_white_umbrella_hd_rain-HD.jpg";


  return (
        <div className="InfoBox">
            
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
          info.humidity>80
          ? Rainy_URL
          : info.temp > 22
          ? Hot_URL
          : Cold_URL
        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          {
          info.humidity>80
          ? <ThunderstormIcon/>
          : info.temp > 22
          ? <WbSunnyIcon/>
          : <AcUnitIcon/>
        }
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
        </div>
    )
}