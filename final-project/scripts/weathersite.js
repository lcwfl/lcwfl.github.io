const requestURL = 'https://lcwfl.github.io/final-project/data/rentals.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject);
        const rentallist = jsonObject['rental'];

        for (let i = 0; i < rentallist.length; i++) {
           
                let card = document.createElement('rentallist');
                card.setAttribute('class', 'city')
                let rentaltype = document.createElement('h1');
                let maxPersons = document.createElement('h2');
                let reshalfday = document.createElement('h3');
                let resfullday = document.createElement('h3');
                let walkinhalf = document.createElement('h3');
                let walkinfull = document.createElement('h3');
                

                //Main
                rentaltype.textContent = 'Rental Type:' + rentallist[i].rentalType;
                maxPersons.textContent = 'Max Persons:' + rentallist[i].maxPersons;
                reshalfday.textContent = 'Half Day Rental Reservation:' + rentallist[i].reshalfday;
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