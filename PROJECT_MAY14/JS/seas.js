
import {showWeatherAtSea} from './showWeatherAtSea.js'

const seasInfoDom = (pPosition)=>{
    console.log(`Now it is seasInfoDom and the position is ${pPosition}`);
    const API_KEY = `6ce96244-ac50-11eb-80d0-0242ac130002-6ce962b2-ac50-11eb-80d0-0242ac130002`;
   
    let myHeaders = new Headers();
    myHeaders.append("Authentication-Token", API_KEY);
    const params = 'windSpeed,windDirection,waveHeight,waveDirection,airTemperature';
    //let formdata = new FormData();
    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: formdata,//Get method can not have body
    redirect: 'follow'
    };

fetch(`https://api.stormglass.io/v2/weather/point?lat=${pPosition.lat}&lng=${pPosition.lng}&params=${params}&source=noaa`, requestOptions)
  .then(response => response.json())//response.text())
  .then(result => { //console.log(result.hours.slice(0,24));//first 24hrs 
                    showWeatherAtSea(result.hours.slice(0,24));
    return result; 
  })
  .catch(error => console.log('error', error));
}

export {
  seasInfoDom
};
/**
 * https://api.stormglass.io/v2/forecast?lat=${pPosition.lat}&lng=${pPosition.lng}&params=${params}
 * https://openweathermap.org/ can be used later
 */