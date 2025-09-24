import './style.css'
import {apiKey} from './env.js'

const meteo = fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=" 
+ apiKey).then((response)=>{
  console.log(response)
  return response
}).then(data=> {
  return data.json();
});
console.log(meteo);