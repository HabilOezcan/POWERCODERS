const weatherInfoDom = (pPosition)=>{

    console.log(`Now it is weatherInfoDom and the position is ${pPosition}`);
    const API_KEY = `0281989774c5438eaff797fa8b421ce1`;
    let API_URL = new URL(`https://api.weatherbit.io/v2.0/current`);

    let params = {lat:pPosition.lat, lon : pPosition.lng, key : API_KEY} // or:
    //var params = [['lat', '35.696233'], ['long', '139.570431']]
    API_URL.search = new URLSearchParams(params).toString();
    // API_URL.searchParams.set("lon",);

    fetch(API_URL,{"method":"GET"})
    .then(response => {
        return response.json()})
    .then(data => {
        console.log(data);
        /**
         * write your codes here if you need to 
         */
        return data;
    })
    .catch(error => console.log('error', error)); // HERE I GOT THE INFO BUT I WANT TO GET MORE INFO SO I NEED TO CHANGE THE REQ
    //https://www.weatherbit.io/support/post/icons ICONS STORED HERE IN THIS LINK SO FEEL FREE TO USE THEM IN YOUR CODE... 
}

/**
 * count: Count of returned observations.
data: [
lat: Latitude (Degrees).
lon: Longitude (Degrees).
sunrise: Sunrise time (HH:MM).
sunset: Sunset time (HH:MM).
timezone: Local IANA Timezone.
station: Source station ID.
ob_time: Last observation time (YYYY-MM-DD HH:MM).
datetime: Current cycle hour (YYYY-MM-DD:HH).
ts: Last observation time (Unix timestamp).
city_name: City name.
country_code: Country abbreviation.
state_code: State abbreviation/code.
pres: Pressure (mb).
slp: Sea level pressure (mb).
wind_spd: Wind speed (Default m/s).
wind_dir: Wind direction (degrees).
wind_cdir: Abbreviated wind direction.
wind_cdir_full: Verbal wind direction.
temp: Temperature (default Celcius).
app_temp: Apparent/"Feels Like" temperature (default Celcius).
rh: Relative humidity (%).
dewpt: Dew point (default Celcius).
clouds: Cloud coverage (%).
pod: Part of the day (d = day / n = night).
weather: {
icon:Weather icon code.
code:Weather code.
description: Text weather description.
}
vis: Visibility (default KM).
precip: Liquid equivalent precipitation rate (default mm/hr).
snow: Snowfall (default mm/hr).
uv: UV Index (0-11+).
aqi: Air Quality Index [US - EPA standard 0 - +500]
dhi: Diffuse horizontal solar irradiance (W/m^2) [Clear Sky]
dni: Direct normal solar irradiance (W/m^2) [Clear Sky]
ghi: Global horizontal solar irradiance (W/m^2) [Clear Sky]
solar_rad: Estimated Solar Radiation (W/m^2).
elev_angle: Solar elevation angle (degrees).
h_angle: Solar hour angle (degrees).
 */