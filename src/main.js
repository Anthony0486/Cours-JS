import './style.css'
import {apiKey} from './env.js'

// FETCH RECUPERER INFOS (JSON) D'UNE API: 

// const meteo = fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=" 
// + apiKey).then(response=>{
//   return response
// }).then(data=> {
//   return data.json();
// });
// console.log(meteo);

//OU:

// const meteo = fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=" 
// + apiKey).then(response=> response.json())
// .then(data =>{
//   console.log(data);
// });

//OU:

// const apiMeteo = async () => {
//   return await fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=" + apiKey)
//   .then(response => {
//     return response.json();
//   });
// };
// apiMeteo().then(json => {
//   console.log(json);
// })

//OU:

async function apiFunction(){
  return await fetch("https://api.openweathermap.org/data/2.5/weather?lon=1.44&lat=43.6&appid=" + apiKey)
  .then(response => {
    return response.json();
  });
};

apiFunction().then(json =>{
  console.log(json.weather[0].main);
});


