export default function Sunrise (props) {
    
   let sunriseUnix = props.sunrise;
   let sunriseDate = new Date(sunriseUnix*1000);
   let sunriseHour = sunriseDate.getHours();
  if (sunriseHour < 10) {
    sunriseHour = `0${sunriseHour}`;
  }
  let sunriseMinutes = sunriseDate.getMinutes();
  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }
  let sunriseTime = `${sunriseHour}:${sunriseMinutes}`;
return sunriseTime;
}
