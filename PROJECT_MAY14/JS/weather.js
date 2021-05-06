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