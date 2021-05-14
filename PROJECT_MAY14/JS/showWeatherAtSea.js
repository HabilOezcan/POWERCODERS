const showWeatherAtSea= (pData)=>{
    console.log(pData);
    const landInfo = document.getElementById('landComponent');
    const seaInfo = document.getElementById('seaComponent');
    landInfo.style.display = 'none';
    seaInfo.style.display = 'block';

    const seaContent = document.getElementById('seasContent');
    if(!document.getElementById('infoSea')){
        const infoContainer = document.createElement('div');
        infoContainer.setAttribute("id", "infoSea");
        infoContainer.innerHTML = '';
        seaContent.appendChild(infoContainer);        
    }
    let indexTime= 0;
    infoDom(pData, indexTime);
    if(!document.getElementById('preHourBtn')){//if block prevents more than one time creation of both buttons
    let content = `
        <button id = 'preHourBtn' type="button">&#10094;</button>
        <button id = 'nextHourBtn' type="button">&#10095;</button>
    `;
    seaContent.innerHTML += content;
    }

    const btnPre = document.getElementById('preHourBtn');
    btnPre.addEventListener('click',(ev)=>{
        if(indexTime!==0){
            indexTime--;
            infoDom(pData, indexTime);
        }
    });

    const btnNext = document.getElementById('nextHourBtn');
    btnNext.addEventListener('click',(ev)=>{
        if(indexTime!==23){
            indexTime++;
            infoDom(pData, indexTime);
        }
    });
}

const infoDom = (pData, pIndex) =>{

    let content;
    try {
        content = 
        `<ul>
            <li>Time : ${pData[pIndex].time} GMT</li>
            <li>Air Temperature : ${pData[pIndex].airTemperature.noaa} &deg;C</li>
            <li>Wave Height : ${pData[pIndex].waveHeight.noaa} m</li>
            <li>Wave Direction : ${pData[pIndex].waveDirection.noaa}</li>
            <li>Wind Speed : ${pData[pIndex].windSpeed.noaa} m/sn</li>
            <li>Wind Direction : ${pData[pIndex].windDirection.noaa}</li>
        </ul>`;
        document.getElementById('infoSea').innerHTML = content;
    } catch (error) {
        content = 
        `<ul>
            <li>Time : ${pData[pIndex].time} GMT</li>
            <li>Air Temperature : ${pData[pIndex].airTemperature.noaa} &deg;C</li>
            <li>Wind Speed : ${pData[pIndex].windSpeed.noaa} m/sn</li>
            <li>Wind Direction : ${pData[pIndex].windDirection.noaa}</li>
        </ul>`;
        document.getElementById('infoSea').innerHTML = content;
    }
}

export{
    showWeatherAtSea
}

