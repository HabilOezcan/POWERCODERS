const seasInfoDom = (pPosition)=>{
    console.log(`Now it is seasInfoDom and the position is ${pPosition}`);
    const API_KEY = `6ce96244-ac50-11eb-80d0-0242ac130002-6ce962b2-ac50-11eb-80d0-0242ac130002`;
   
    let myHeaders = new Headers();
    myHeaders.append("Authentication-Token", API_KEY);
    const params = 'waveHeight,airTemperature';
    //let formdata = new FormData();
    let requestOptions = {
    method: 'GET',
    headers: myHeaders,
    //body: formdata,//Get method can not have body
    redirect: 'follow'
    };

fetch(`https://api.stormglass.io/v2/weather/point?lat=${pPosition.lat}&lng=${pPosition.lng}&params=${params}&source=noaa`, requestOptions)
  .then(response => response.json())//response.text())
  .then(result => {
    console.log(result)
                  /**
                   * write your codes here if you need to 
                   */
    return result; 
  })
  .catch(error => console.log('error', error));
}

/**
 * https://api.stormglass.io/v2/forecast?lat=${pPosition.lat}&lng=${pPosition.lng}&params=${params}
 * https://openweathermap.org/ can be used later
 */