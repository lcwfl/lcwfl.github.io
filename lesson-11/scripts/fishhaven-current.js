const url = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=ac910de0dc502653ff941e31a485a349';
fetch(url)
.then((response) => response.json())
.then((fishhaven) => {
  console.log(fishhaven);
  
document.getElementById('current').textContent = Math.round(fishhaven.main.temp);
document.getElementById('high').textContent = Math.round(fishhaven.main.temp_max);
document.getElementById('hum').textContent = fishhaven.main.humidity;
document.getElementById('speed').textContent = Math.round(fishhaven.wind.speed) + "MPH";
document.getElementById('condition').textContent = fishhaven.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(fishhaven.main.feels_like);

});
const findFishHaven = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(findFishHaven)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];
        for (let i = 0; i < town.length; i++) {
            let townEvents = town[i].events;
            if (town[i].name == "Fish Haven") {
                for (let x = 0; x < townEvents.length; x++) {
                    let event = document.createElement('p');
                    event.innerHTML = townEvents[x];
                    document.querySelector('div.upcoming').appendChild(event);
                }
            }
        }
    });