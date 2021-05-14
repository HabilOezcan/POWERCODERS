
import  {seasInfoDom} from './seas.js';
import  {weatherInfoDom} from './weather.js';

const loadPage = () => {
    const landInfo = document.getElementById('landComponent');
    const seaInfo = document.getElementById('seaComponent');
    landInfo.style.display = 'none';
    seaInfo.style.display = 'none';

    let myloc = [46.9481, 7.4474];
    let map = L.map('mapid').setView(myloc, 13);
    const waterInfo = {
        inWater: false
    };

    //let map = L.map('mapid').fitWorld();

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: `mapbox/streets-v11`, //'mapbox/streets-v11', //mapbox/satellite-v9
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaG96Y2FuIiwiYSI6ImNrbnltcG42djA3MWwybnAxaWdhMWx2cDAifQ.lylnhHT3uUiQEFFKRwn2wA'
    }).addTo(map);

    //map.locate({setView: true, maxZoom: 13});
    let marker = L.marker(myloc, {
        draggable: 'true'
    }).addTo(map);
    marker.bindPopup(`<b>Position: </b>${marker.getLatLng()}<br>`).openPopup();
 
    marker.on(`moveend`, (ev) => { //locIsOnWater icinde fetch islemi gerceklesmekte
        console.log(`This is the marker position info ${marker.getLatLng()}`);
        map.setView(marker.getLatLng(),13);
        locIsOnWater(marker.getLatLng());
    });

    let popup = L.popup(); //Bu popup sadece click yapildiginda click yapilan noktadin location@ini veriyor daha fazlasi degil
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
        let position = e.latlng;
        console.log(`This is the click info ${position}`); // that is added by me
    }
    map.on('click', onMapClick);

    /**
     * weather API works here
     */

    function locIsOnWater(position) {
        let onWaterAPI_Key = `txYnWzSzib-UupFD91hP`;
        fetch(`https://api.onwater.io/api/v1/results/${position.lat},${position.lng}?access_token=${onWaterAPI_Key}`)
            .then(response => response.json())
            .then(data => getWaterInfo(data, position))
            .catch(error => console.log('error', error)); // 
    }

    const getWaterInfo = (pData, pPosition) => {
        console.log(pData);
        if (pData.water === true) {
            console.log(`now It seems I am on the SEA`);
            /**
             * Burada Deniz durumu icin gerekli islemler yapilacak
             */
            //weatherInfoDom(pPosition);
            seasInfoDom(pPosition);
        } else {
            console.log(`now It seems I am on the LAND`);
            /**
             * Burada hava durumu icin gerekli islemler yapilacak
             */
            weatherInfoDom(pPosition);
            //seasInfoDom(pPosition);
        };
    }
}

export {
    loadPage
};