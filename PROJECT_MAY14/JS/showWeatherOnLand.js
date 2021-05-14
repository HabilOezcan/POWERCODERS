const showWeatherOnLand = (pData)=>{
    console.log(pData);
    const landInfo = document.getElementById('landComponent');
    const seaInfo = document.getElementById('seaComponent');
    landInfo.style.display = 'block';
    seaInfo.style.display = 'none';

    const weatherContent = document.getElementById('weatherContent');
    weatherContent.innerHTML = '';
    let content = `
        <ul>
            <li>Observation Time : ${pData.ob_time} GMT</li>
            <li>City Name : ${pData.city_name}</li>
            <li>Temprature : ${pData.temp} &deg;C</li>
            <li><img src='./IMGs/icons/c01d.png' alt='sunrise'width='15' height='15'>${pData.sunrise} GMT</li>
            <li><img src='./IMGs/icons/sunset1.jpg' alt='sunset'width='15' height='15'>${pData.sunset} GMT</li>
            <li>Wind Speed : ${pData.wind_spd} m/sn</li>
            <li>Wind Direction : ${pData.wind_dir}</li>
            <li><img src='./IMGs/icons/${pData.weather.icon}.png' alt='weather definition'width='15' height='15'> ${pData.weather.description}</li>
        </ul>
    `;
    weatherContent.innerHTML = content;

}

export {
    showWeatherOnLand
}