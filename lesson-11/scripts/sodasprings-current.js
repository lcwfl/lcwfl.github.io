const url = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=ac910de0dc502653ff941e31a485a349';
fetch(url)
.then((response) => response.json())
.then((sodasprings) => {
  console.log(sodasprings);
  
document.getElementById('current').textContent = Math.round(sodasprings.main.temp);
document.getElementById('high').textContent = Math.round(sodasprings.main.temp_max);
document.getElementById('hum').textContent = sodasprings.main.humidity;
document.getElementById('speed').textContent = Math.round(sodasprings.wind.speed) + "MPH";
document.getElementById('condition').textContent = sodasprings.weather[0].main;
document.getElementById('feelsLike').textContent = Math.round(sodasprings.main.feels_like);

});
const findSoda = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(findSoda)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const town = jsonObject['towns'];
        for (let i = 0; i < town.length; i++) {
            let townEvents = town[i].events;
            if (town[i].name == "Soda Springs") {
                for (let x = 0; x < townEvents.length; x++) {
                    let event = document.createElement('p');
                    event.innerHTML = townEvents[x];
                    document.querySelector('div.upcoming').appendChild(event);
                }
            }
        }
    });