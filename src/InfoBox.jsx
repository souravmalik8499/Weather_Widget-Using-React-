import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}){
        const INIT_URL="https://tse1.mm.bing.net/th?id=OIP.QXYu8JqMdwfnNnAlDTuoGQHaFN&pid=Api&P=0&h=180"
    return (
        <div className="InfoBox">
            
            <div className="cardcontainer">
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_URL}
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
        </div>
    )
}