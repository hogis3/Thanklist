const API_KEY = "e4d0bb7be3db07c90640a0aa8423a959"
const COORDS = "coords";
const weather = document.querySelector (".js-weather");

function getWeather (lat, lon) {
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response) {return response.json()})
    .then (function  (json) {
        const temperature = Math.floor(json.main.temp);
        const place = json.name;
        weather.innerText = `${temperature}°C @ ${place}`;
    });
}

function saveCoords (coordsObj) {
    localStorage.setItem (COORDS, JSON.stringify (coordsObj));
}

function handleGeoSuccess (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords (coordsObj);
    getWeather (latitude, longitude);
}

function handleGeoError () {
    console.log ("try again");
}

function askForCoords () {
    navigator.geolocation.getCurrentPosition (handleGeoSuccess, handleGeoError)
}

function loadCoords () {
    const loadedCoords = localStorage.getItem (COORDS)
    if (loadedCoords === null) {
        askForCoords ()
    }
    else {
        const parseCoords = JSON.parse(loadedCoords);
        getWeather (parseCoords.latitude, parseCoords.longitude);
    }
}


function init () {
    loadCoords ();
}

init ();