const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const city = jsonObject['city'];

    for (let i = 0; i < city.length; i++ ) {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let avgrain = document.createElement('p');
        let motto = document.createElement('p');
        let founded = document.createElement('p');
        let population = document.createElement('p');
        let photo = document.createElement('img');
        
        name.textContent = '    : ' + prophets[i].birthdate;
        bornAt.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        photo.setAttribute('src', prophets[i].imageurl);
        photo.setAttribute('alt', prophets[i].name + prophets[i].lastname + " - " + prophets[i].order);
        title.textContent = prophets[i].name + ' ' + prophets[i].lastname;

        card.appendChild(title);
        card.appendChild(birthdate);
        card.appendChild(bornAt);
        card.appendChild(photo);
        document.querySelector('div.cards').appendChild(card);
    }
  });

  /*
  name
  photo
  motto
  yearFounded
  currentPopulation
  averageRainFall
  events
        const element = filteredTowns[i];
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let description = document.createElement('span');
        let annualRain = document.createElement('p');
        let year = document.createElement('p');
        let population = document.createElement('p');
        let image = document.createElement('img');
        let div = document.createElement('div');
        h2.textContent = element.name
        year.textContent = 'Year founded: ' + element.yearFounded;
        population.textContent = 'Population: ' + element.currentPopulation;
        annualRain.textContent = 'Annual Rain Fall: ' + element.averageRainfall;
        description.textContent = element.motto;
        image.setAttribute('src', 'images/300x400.png');
        image.setAttribute('data-src', 'images/' + element.photo);
        image.setAttribute('alt', element.name);
        div.append(h2, description, year, population, annualRain,)
        card.append(div, image);
        document.querySelector('div.cards').appendChild(card);




  */