const url = 'https://api.openweathermap.org/data/2.5/weather?q=Preston,us&units=imperial&APPID=ac910de0dc502653ff941e31a485a349';
fetch(url)
.then((response) => response.json())
.then((preston) => {
  console.log(preston);
  
document.getElementById('current').textContent = Math.round(preston.main.temp);
document.getElementById('high').textContent = Math.round(preston.main.temp_max);
document.getElementById('hum').textContent = preston.main.humidity;
document.getElementById('speed').textContent = Math.round(preston.wind.speed) + "MPH";
document.getElementById('condition').textContent = preston.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(preston.main.feels_like);

});

const findPreston = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(findPreston)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];
        for (let i = 0; i < town.length; i++) {
            let townEvents = town[i].events;
            if (town[i].name == "Preston") {
                for (let x = 0; x < townEvents.length; x++) {
                    let event = document.createElement('p');
                    event.innerHTML = townEvents[x];
                    document.querySelector('div.upcoming').appendChild(event);
                }
            }
        }
    });