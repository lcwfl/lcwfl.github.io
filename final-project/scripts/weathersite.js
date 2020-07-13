const requestURL = 'data/rentals.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentallist = jsonObject['rentals'];

        for (let i = 0; i < rentallist.length; i++) {
            if (rentallist[i].id == "1" || rentallist[i].id == "2" || rentallist[i].id == "3" || rentallist[i].id == "4" || rentallist[i].id == "5" || rentallist[i].id == "6") {
                let card = document.createElement('rentallist');
                card.setAttribute('class', 'city')
                let rentaltype = document.createElement('h1');
                let maxPersons = document.createElement('h2');
                let reshalfday = document.createElement('h3');
                let resfullday = document.createElement('h3');
                let walkhalf = document.createElement('h3');
                let walkfull = document.createElement('h3');
                

                //Main
                rentaltype.textContent = rentallist[i].rentaltype;
                maxPersons.textContent = rentallist[i].maxPersons;
                reshalfday.textContent = rentallist[i].reshalfday;
                resfullday.textContent = rentallist[i].resfullday;
                walkinhalf.textContent = rentallist[i].walkinhalf;
                walkinfull.textContent = rentallist[i].walkinfull;

                card.appendChild(rentaltype);
                card.appendChild(maxPersons);
                card.appendChild(reshalfday);
                card.appendChild(resfullday);
                card.appendChild(walkinhalf);
                card.appendChild(walkinfull);
                document.querySelector('div.cards').appendChild(card);
            }
        }
    });
  /*
  JSON Fields

  name
  photo
  motto
  yearFounded
  currentPopulation
  averageRainFall
  events
        

  */