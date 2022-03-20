const APIKey = 'd4378a25d9aea015e9c9f062476c2cd3';

function onGeoSuccess(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKey}`;
    fetch(url).then(response => response.json()).then(data => {
        const location = data.name;
        const weather = data.weather[0].main;
        const locationItem = document.querySelector('#weatherCon span:first-child');
        const weatherItem = document.querySelector('#weatherCon span:last-child');

        locationItem.innerText = location;
        weatherItem.innerText = weather;
    });
}
function onGeoError(){
    alert("Cannot find your loacation! T.T");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);

